#!/usr/bin/env bash

# cd python
# docker build -t demo2 .
# docker run demo2 > output.txt

docker run --volume=/Users/madhur/Desktop/projects/syntaxError/python:/usr/src/app pythonimage /bin/bash -c "cd /usr/src/app && cat input.txt | python3 code.py > output.txt"