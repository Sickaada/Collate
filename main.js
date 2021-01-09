

function acceptinput(){
   var input= document.getElementById("inputtext").text;

}

function resetinput(){

    document.getElementById("inputtext").value = "" ;
}



function pythonClick(){
    document.getElementById("cppButton").style.backgroundColor = "#ffffff";
    document.getElementById("pythonButton").style.backgroundColor = "#ff6700" ; 
    document.getElementById("javaButton").style.backgroundColor = "#ffffff";
    
    document.getElementById("cppButton").style.color = "#575757";
    document.getElementById("pythonButton").style.color = "#ffffff" ; 
    document.getElementById("javaButton").style.color = "#575757";
    
}

function cppClick(){
    document.getElementById("cppButton").style.backgroundColor = "#ff6700";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ffffff";

    document.getElementById("cppButton").style.color = "#ffffff";
    document.getElementById("pythonButton").style.color = "#575757" ; 
    document.getElementById("javaButton").style.color = "#575757";
}

function javaClick(){
    document.getElementById("cppButton").style.backgroundColor = "#ffffff";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ff6700";
    
    document.getElementById("cppButton").style.color = "#575757";
    document.getElementById("pythonButton").style.color = "#575757" ; 
    document.getElementById("javaButton").style.color = "#ffffff";
}

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();