const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { exec } = require('child_process')
var bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

// receiving code and language from client

app.post('/', (req, res) => {


    // For python Language
    if (req.query.lang === 'Python') {

        // writing input in a file
        fs.writeFile('./python/input.txt', req.query.input, function (err) {
            if (err) {
                console.log("There is some error in creating input file")
            }
        })

        // writing code in a file 
        fs.writeFile('./python/code.py', req.body.code, function (err) {
            if (err) {
                console.log('There is some error in writing the file')
            }
            else {
                exec("docker run --volume=/Users/sweetygupta/Desktop/SyntaxError/python:/usr/src/app pythonimage /bin/bash -c \"cd /usr/src/app && cat input.txt | python3 code.py > output.txt\"", (error, stdout, stderr) => {
                   
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    console.log("Python")
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);

                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    fs.readFile('./python/output.txt', (error, data) => {
                        res.send(data);
                    });

                });

            }
        }
        )

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

                exec("docker run --volume=/Users/sweetygupta/Desktop/SyntaxError/cpp:/usr/src/app cppimage /bin/bash -c \"cd /usr/src/app && g++ -std=c++14 -o binary code.cpp && cat input.txt | ./binary > output.txt\"", (error, stdout, stderr) => {
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

                exec("docker run --volume=/Users/sweetygupta/Desktop/SyntaxError/java:/usr/src/app javaimage /bin/bash -c \"cd /usr/src/app && javac Main.java && cat input.txt | java Main > output.txt\"", (error, stdout, stderr) => {
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







