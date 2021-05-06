const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express();
app.use(cors())
var Docker = require('dockerode');
const { Volume, Container } = require('dockerode')

var docker = new Docker({
    socketPath: '/var/run/docker.sock'
});


async function execCode(randomNumber, lang, ext, img_name, run_cmd, input, code, callback) {


    fs.writeFile(`./${lang}/input.txt`, input, function (err) {
        if (err) {
            res.status(500)
        }
    })
    fs.writeFile(`./${lang}/code.${ext}`, code, function (err) {
        if (err) {
            res.status(500)
        }
        else {

            docker.run(img_name, run_cmd, process.stdout, {
                name: `imageName_${randomNumber}`, HostConfig: {
                    AutoRemove: true, NetworkMode: 'bridge', Binds: [
                        `${__dirname}/${lang}/:/var/`
                    ]
                }
            }).then(function (err, data, container) {
                fs.readFile(`./${lang}/output.txt`, (error, data) => {
                    callback(data)

                });

            })

        }
    })
};

module.exports = { execCode };

