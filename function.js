const express  = require('express')
const fs = require('fs')
const app = express()


 function common(lang, img_name, run_cmd) {
    fs.writeFile(`./${lang}/input.txt`, req.query.input, function (err) {
        if (err) {
            res.status(500)
        }
    })
    fs.writeFile(`./${lang}/code.py`, req.body.code, function (err) {
        if (err) {
            res.status(500)
        }
        else {
            docker.run(img_name, run_cmd, process.stdout, {
                name: 'image_container', HostConfig: {
                    AutoRemove: true, NetworkMode: 'bridge', Binds: [
                        `${__dirname}/${lang}/:/var/`
                    ]
                }
            }, function (err, data, container) {
                console.log(err)

            });

        }
    })
};
module.exports={common};
