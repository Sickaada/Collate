const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { exec } = require('child_process')
var bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

// receiving code and language from client

app.get('/', (req, res) => {
    res.send('Hello Mahek!')

    // For python Language
    if (req.query.lang === 'python') {

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
                exec("./python/pythonDocker.sh", (error, stdout, stderr) => {
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
                    console.log('SUPP homie! It worked fine')
                });

            }
        }
        )
    }
    else if (req.query.lang === 'cpp') {
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
                console.log('SUPP homie! It worked fine')
                exec("./cpp/cppDocker.sh", (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                }
                )
                console.log("cpp compiled!!")           
            }

        })
    }
    else if (req.query.lang === 'java') {
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
                console.log('SUPP homie! It worked fine')
                exec("./java/javaDocker.sh", (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                }
                )
                console.log("java compiled!!")
            }

        })
    }
})






app.listen(4000, () =>
    console.log(' server is listening on port 4000!'),
);