
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { exec } = require('child_process')
var bodyParser = require('body-parser')
const myfunc = require('./function.js')
const app = express();
app.use(cors())
app.use(bodyParser.json())
var Docker = require('dockerode');
const { Volume, Container } = require('dockerode')

var docker = new Docker({
    socketPath: '/var/run/docker.sock'
});



// ## PUT THEM IN DIFFERENT FILE. PULL RATE LIMIT IS REACHED.

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


    // For python Language
    if (req.query.lang === 'Python') {

        fs.writeFile('./python/input.txt', req.query.input, function (err) {
            if (err) {
                console.log("There is some error in creating input file")
            }
        })
        fs.writeFile('./python/code.py', req.body.code, function (err) {
            if (err) {
                console.log('There is some error in writing the file')
            }
            else {
                docker.run('python', ['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1'], process.stdout, {
                    name: 'python_container', HostConfig: {
                        AutoRemove: true, NetworkMode: 'bridge', Binds: [
                            `${__dirname}/python/:/var/`
                        ]
                    }
                })
                .then(function (data, err) {
                    //console.log(err)
                    fs.readFile('./python/output.txt', (error, data) => {
                        res.send(data);
                    })

                })

            }
        }
        )
        // myfunc.common('Python', 'python', "['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1']", req.query.input, req.body.code)
        // fs.readFile('./Python/output.txt', (error, data) => {
        //     res.send(data);
        //})

    }
    else if (req.query.lang === 'Cpp') {
        fs.writeFile('./cpp/input.txt', req.query.input, function (err) {
            if (err) {
                console.log("There is some error in input file")
            }
        })

        fs.writeFile('./cpp/code.cpp', req.body.code, function (err) {
            if (err) {
                console.log('There is some error in writing the file')
            }
            else {
                docker.run('gcc:4.9', ['bash', '-c', 'cd var && g++ -std=c++14 -o binary code.cpp && cat input.txt | ./binary > output.txt 2>&1'], process.stdout, {
                    name: 'cpp_container', HostConfig: {
                        AutoRemove: true, NetworkMode: 'bridge', Binds: [
                            `${__dirname}/Cpp/:/var/`
                        ]
                    }
                }).then(function (data, err) {
                    //console.log(data)
                    fs.readFile('./cpp/output.txt', (error, data) => {
                        res.send(data);
                    });
                })



            }

        })
    }
    else if (req.query.lang === 'Java') {

        fs.writeFile('./java/input.txt', req.query.input, function (err) {
            if (err) {
                console.log("There is some error in input file")
            }
        })

        fs.writeFile('./java/Main.java', req.body.code, function (err) {
            if (err) {
                console.log('There is some error in writing the file')
            }
            else {

                docker.run('openjdk', ['bash', '-c', 'cd var && javac Main.java && cat input.txt | java Main > output.txt 2>&1'], process.stdout, {
                    name: 'java_container', HostConfig: {
                        AutoRemove: true, NetworkMode: 'bridge', Binds: [
                            `${__dirname}/Java/:/var/`
                        ]
                    }
                }).then(function (data, err) {
                    fs.readFile('./Java/output.txt', (error, data) => {
                        res.send(data);
                    });
                })

            }

        })
    }
})









app.listen(4000, () =>
    console.log(' server is listening on port 4000!'),
);







