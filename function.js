const express = require('express')
const cors = require('cors')
const fs = require('fs')
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


function common(lang,img_name,run_cmd, input, code) {
    
    fs.writeFile(`./${lang}/input.txt`, input, function (err) {
        if (err) {
            res.status(500)
        }
    })
    fs.writeFile(`./${lang}/code.py`, code, function (err) {
        if (err) {
            res.status(500)
        }
        else {
            
            docker.run(img_name, run_cmd, process.stdout, {
                name: 'image__container', HostConfig: {
                    AutoRemove: true, NetworkMode: 'bridge', Binds: [
                        `${__dirname}/${lang}/:/var/`
                    ]
                }
            }, function (err, data, container) {
                console.log(err)

            });
            // docker.run('python', ['bash', '-c', 'cd var && cat input.txt | python code.py > output.txt 2>&1'], process.stdout, {
            //                 name: 'python_container', HostConfig: {
            //                     AutoRemove: true, NetworkMode: 'bridge', Binds: [
            //                         `${__dirname}/python/:/var/`
            //                     ]
            //                 }
            //             }, function (err, data, container) {
            //                 console.log(err)
        
            //             });

        }
    })
};

module.exports = { common };

