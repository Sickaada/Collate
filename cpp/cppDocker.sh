#!/usr/bin/env bash


docker run --volume=/Users/madhur/Desktop/projects/syntaxError/cpp:/usr/src/app meet /bin/bash -c "cd /usr/src/app && g++ -std=c++14 -o binary code.cpp && cat input.txt | ./binary > output.txt"
