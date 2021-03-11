
const express = require('express')
const cors = require('cors')
const fs = require('fs')

var bodyParser = require('body-parser')
const myfunc = require('./execCode.js')
const app = express();
app.use(cors())
app.use(bodyParser.json())
var Docker = require('dockerode');
const { Volume, Container } = require('dockerode')

var docker = new Docker({
    socketPath: '/var/run/docker.sock'
});




// docker.pull('python:latest', function (err, stream) {
//     //console.log(stream)
// });
// docker.pull('gcc:4.9', function (err, stream) {
//     //console.log(stream)
// })
// docker.pull('openjdk:latest', function (err, stream) {
//     console.log(err)
//     con
// })






app.post('/', (req, res) => {
    if (req.query.lang === 'Python') {
        myfunc.execCode('Python', 'py', 'python', ['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1'], req.query.input, req.body.code, (data) => {
            fs.readFile('./Python/output.txt', (error, data) => {
                res.send(data);
                fs.unlinkSync('./python/output.txt')
            })
        }
        )
    }
    else if (req.query.lang === 'Cpp') {

        myfunc.execCode('Cpp', 'cpp', 'gcc:4.9', ['bash', '-c', 'cd var && g++ -std=c++14 -o binary code.cpp && cat input.txt | ./binary > output.txt 2>&1'], req.query.input, req.body.code, (data)=>{
                fs.readFile('./cpp/output.txt', (error, data) => {
                    res.send(data)
                });
            })
       
    }
    else if (req.query.lang === 'Java') {
        myfunc.execCode('Java', 'java', ['bash', '-c', 'cd var && javac Main.java && cat input.txt | java Main > output.txt 2>&1'], req.query.input, req.body.code, (data)=>{
                fs.readFile('./Java/output.txt', (error, data) => {
                    res.send(data);
                    fs.unlinkSync('./Java/output.txt')
                });
            })
    }
})

app.listen(4000, () =>
    console.log('Server is listening on port 4000!'),
);







