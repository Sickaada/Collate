
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



docker.pull('python:latest', function (err, stream) {
    //console.log(stream)
});






app.post('/', (req, res) => {


    // For python Language
    if (req.query.lang === 'Python') {

        // writing input in a file
        // fs.writeFile('./python/input.txt', req.query.input, function (err) {
        //     if (err) {
        //         console.log("There is some error in creating input file")
        //     }
        // })

        // // writing code in a file 
        // fs.writeFile('./python/code.py', req.body.code, function (err) {
        //     if (err) {
        //         console.log('There is some error in writing the file')
        //     }
        //     else {
        //         docker.run('python', ['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1'], process.stdout, {
        //             name: 'python_container', HostConfig: {
        //                 AutoRemove: true, NetworkMode: 'bridge', Binds: [
        //                     `${__dirname}/python/:/var/`
        //                 ]
        //             }
        //         }, function (err, data, container) {
        //             console.log(err)

        //         });
        //         fs.readFile('./python/output.txt', (error, data) => {
        //             res.send(data);
        //         })
        //     }
        // }
        // )
        myfunc.common('python', 'python:latest', "['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1']")
        fs.readFile('./python/output.txt', (error, data) => {
            res.send(data);
        })

    }
    else if (req.query.lang === 'Cpp') {
        console.log('it\'s a cpp file')
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
                console.log('ss')
                exec("docker run -v \"$PWD\":/usr/src/myapp -w /usr/src/myapp gcc:4.9 /bin/bash -c \"cd cpp && g++ -std=c++14 -o binary code.cpp && cat input.txt | ./binary > output.txt\"", (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    fs.readFile('./cpp/output.txt', (error, data) => {
                        res.send(data);
                    });
                }
                )

            }

        })
    }
    else if (req.query.lang === 'Java') {
        console.log('it\'s a java file')
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

                exec("docker run docker run -v \"$PWD\":/usr/src/myapp -w /usr/src/myapp javasdk /bin/bash -c \"cd java && javac Main.java && cat input.txt | java Main > output.txt\"", (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    fs.readFile('./java/output.txt', (error, data) => {
                        res.send(data);
                    });
                }
                )

            }

        })
    }
})









app.listen(4000, () =>
    console.log(' server is listening on port 4000!'),
);







