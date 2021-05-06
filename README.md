<h1 align="center">Collate</h1>
<p align="center"><b>A chrome extension to execute code in 2 steps</b></p>

Collate is a chrome extension which will detect the language of code snippet you select and execute it.

## Overview

Currently, to execute any piece of code you find over the web, you change the tabs, search for online compilers or copy it and run on your machine.
No more of this now! </br>
Collate is a chrome extension, the first of its kind. All you need to do is select the code snippet you want to run and press `"Ctrl/Cmd + B"`.
In case you want to modify the selected code, we have provided a code editor too.

### Supported Languages

Collate currently supports following languages:

- Python
- C++
- JAVA 8

## Dependencies

You need to have [Docker](https://www.docker.com/) and [Node](https://nodejs.org/en/) v14.16.0 in your machine.</br>
Here are the installation guides for Docker:

- [Linux](https://runnable.com/docker/install-docker-on-linux)
- [MacOS](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)</br>

Here are the installation guides for Node:

- [Linux](https://nodejs.org/en/download/)
- [MacOS](https://nodejs.org/en/download/)
- [Windows](https://nodejs.org/en/download/)

## Development

### Setting up server

Assuming you have [Dependencies](#Dependencies) installed, run the following commands in your terminal:

1. Clone this repository.

   ```bash
   $ git clone https://github.com/silentC1C4D4/collate
   ```

2. Pull these three images.
   ```bash
   $ docker pull python:latest
   $ docker pull gcc:4.9
   $ docker pull openjdk:latest
   ```
3. Navigate to Collate directory.
   ```bash
   $ cd Collate
   $ npm install
   ```
4. Navigate to [./frontend/mainpage.js](https://github.com/silentC1C4D4/Collate/blob/master/frontend/mainpage.js) on line 86 change the address to your preferred one.</br>
   Example:
   `http://52.172.170.205:4000/?lang=` to `http://localhost:4000/?lang=`
5. Start the server.

   ```bash
   $ npm run watch
   ```

   In case you don't have sudo privileges to docker, you can make following changes.

6. While pulling images:
   ```bash
   $ sudo docker pull python:latest
   $ sudo docker pull gcc:4.9
   $ sudo docker pull openjdk:latest
   ```
7. While starting the server:
   ```bash
   $ sudo node index.js
   ```

### Setting up Chrome Extension

1. You need to install chrome extension locally.
   1. Navigate to [chrome://extensions/](chrome://extensions)
   2. Turn on Developer mode
   3. Go to "Load Unpacked"
   4. Browse to ./frontend

### Upcoming tasks

Instead of having different folders for each language, we are planning to create random file names with each request.

### Note

If you want to run a Java code, the class name must be "Main".

### License

This project is under [MIT License](./LICENSE)
