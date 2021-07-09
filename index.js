
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const dotenv = require('dotenv').config()
const myfunc = require('./execCode.js')
const app = express();
app.use(cors())
app.use(express.json())
var Docker = require('dockerode');
const { Volume, Container } = require('dockerode')

var docker = new Docker({
    socketPath: '/var/run/docker.sock'
});


app.post('/', (req, res) => {
    // random number has been generated such that for every request, a new container is formed.
    randomNumber = Math.floor(Math.random() * 100)
    if (req.query.lang === 'Python') {
        // a timeout of 5s is given. In case docker on machine is taking time for compiling the code, you can increase the time.
        myfunc.execCode(randomNumber, 'Python', 'py', 'python', ['bash', '-c', 'cd var && cat input.txt | timeout 5 python code.py > output.txt 2>&1'], req.query.input, req.body.code, (data) => {
            fs.readFile('./Python/output.txt', (error, data) => {
                res.send(data);

            })
        }
        )
    }
    else if (req.query.lang === 'Cpp') {
        myfunc.execCode(randomNumber, 'cpp', 'cpp', 'gcc:4.9', ['bash', '-c', 'cd var && g++ -std=c++14 -o binary code.cpp > output.txt 2>&1 && cat input.txt | timeout 5 ./binary > output.txt'], req.query.input, req.body.code, (data) => {
            fs.readFile('./cpp/output.txt', (error, data) => {
                res.send(data)
            });
        })

    }
    else if (req.query.lang === 'Java') {
        myfunc.execCode(randomNumber, 'Java', 'java', 'openjdk', ['bash', '-c', 'cd var && javac code.java > output.txt 2>&1 && cat input.txt | timeout 5 java Main > output.txt'], req.query.input, req.body.code, (data) => {
            fs.readFile('./Java/output.txt', (error, data) => {
                res.send(data);

            });
        })
    }
})

app.listen(4000, () =>
    console.log('Server is listening on port 4000!'),
);







