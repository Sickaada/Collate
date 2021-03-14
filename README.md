<p>This is a chrome extension which will execute your code in 2 easy steps. 
You need to setup frontend in your machine (instructions are given below).</br>
Copy the code snippet you want to run and press "Ctrl/Cmd +B".
In case you want to change the copied code, there is a editor included in this extension also.</br>
While running the JAVA code, you need to keep in mind to set class name as "Main".</p>

# STEPS TO SETUP FOR DEVELOPMENT PURPOSE:
### You need to have Docker and Node in your local machine.
## Setting up server

    Run following commands
      1. Clone the project
      2. docker pull python:latest
      3. docker pull gcc:4.9
      4. docker pull openjdk:latest
      5. npm install
      6. npm run watch

## Setting up chrome extension

    1. Navigate to chrome://extensions/
    2. Turn on Developer mode
    3. Go to " Load Unpacked "
    4. Browse to ./frontend

<p>After doing the aforementioned steps, navigate to ./frontend/mainpage.js and on line 86, change the address to </br>
```http:localhost:4000\...```</p>

### You are good to go my friend!

### ~P.S. Give me a name please!~ It's Collate.
