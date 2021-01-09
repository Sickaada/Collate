

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

    
}
function cppClick(){
    document.getElementById("cppButton").style.backgroundColor = "#ff6700";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ffffff";

  
}
function javaClick(){
    document.getElementById("cppButton").style.backgroundColor = "#ffffff";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ff6700";
    
   
}
resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();