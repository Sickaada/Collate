const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { exec } = require('child_process')
var bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
app.use(cors())
app.use(bodyParser.json())




function myfunc(lang,){
    fs.writeFile(`./${lang}/input.txt`,req.query.input,function(err){
        if (err){
            res.status(500)
        }
    })
    fs.writeFile(`./${lang}/code.py`,req.body.code, function(err){
        if (err){
            res.status(500)
        }
        else {
            exec("docker run --volume=/Users/madhur/Desktop/projects/untitled folder/Collate:/usr/src/app pythonimage /bin/bash -c \"cd /usr/src/app && cat input.txt | python3 code.py > output.txt\"", (error, stdout, stderr) => {
                   
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
        }
    })}