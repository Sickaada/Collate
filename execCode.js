const express = require('express')
const cors = require('cors')
const fs = require('fs')
var bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())
var Docker = require('dockerode');
const { Volume, Container } = require('dockerode')

var docker = new Docker({
    socketPath: '/var/run/docker.sock'
});


async function execCode(lang, ext, img_name, run_cmd, input, code, rn, callback) {

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
                name: `image__container${rn}`, HostConfig: {
                    AutoRemove: true, NetworkMode: 'bridge', Binds: [
                        `${__dirname}/${lang}/:/var/`
                    ]
                }
            }).then(function (err, data, container) {
                fs.readFile(`./${lang}/output.txt`, (error, data) => {
                    callback(data)
                    fs.unlinkSync(`./${lang}/output.txt`)
                });

            })

        }
    })
};

module.exports = { execCode };

