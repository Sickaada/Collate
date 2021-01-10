#!/usr/bin/env bash

docker run --volume=/Users/madhur/Desktop/projects/syntaxError/java:/usr/src/app javaimage /bin/bash -c "cd /usr/src/app && javac Main.java && cat input.txt | java Main > output.txt"