# Collate

Collate is a chrome extension which detects the language of a code snippet selected by the user and executes it.

## Overview

Currently, to execute any piece of code you find over the web, you change the tabs, search for online compilers or copy it and run on your machine.
No more of this now! </br>
Collate is a chrome extension, the first of its kind. All you need to do is select the code snippet you want to run and press `"Ctrl/Cmd + B"`.
If you want to modify the selected code, collate also comes with a simple code editor.

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
4. Copy the `.env.example` file and name it `.env` and update the values in it.

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


### Note

If you want to run a Java code, the class name must be "Main".