// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = '';
let consoleMessages = [];

let editorLib = {
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },
    printToConsole() {
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li');
            const newLogText = document.createElement('pre');

            newLogText.className = log.class;
            newLogText.textContent = `> ${log.message}`;

            newLogItem.appendChild(newLogText);

            consoleLogList.appendChild(newLogItem);
        })
    },
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dreamweaver");

        // Set language
            codeEditor.session.setMode("ace/mode/javascript");


        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
    // Clear console messages
    editorLib.clearConsoleScreen();
    
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }

    // Print to the console
    editorLib.printToConsole();
});

function javascriptClick(){
    document.getElementById("javascriptButton").style.backgroundColor = "#d3d3d3";
    document.getElementById("htmlButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("pythonButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("cppButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("javaButton").style.backgroundColor = "#b5e7a0";
}
function htmlClick(){
    document.getElementById("javascriptButton").style.backgroundColor = "#b5e7a0"; 
    document.getElementById("htmlButton").style.backgroundColor = "#d3d3d3";
    document.getElementById("pythonButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("cppButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("javaButton").style.backgroundColor = "#b5e7a0";
    
}
function pythonClick(){
    document.getElementById("javascriptButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("htmlButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("pythonButton").style.backgroundColor = "#d3d3d3";
    document.getElementById("cppButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("javaButton").style.backgroundColor = "#b5e7a0";
}
function cppClick(){
    document.getElementById("javascriptButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("htmlButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("pythonButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("cppButton").style.backgroundColor = "#d3d3d3";
    document.getElementById("javaButton").style.backgroundColor = "#b5e7a0";
}
function javaClick(){
    document.getElementById("javascriptButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("htmlButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("pythonButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("cppButton").style.backgroundColor = "#b5e7a0";
    document.getElementById("javaButton").style.backgroundColor = "#d3d3d3";
}
resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();