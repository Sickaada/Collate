window.onload = function () {
    document.getElementById("inputtext").value = localStorage.getItem("code");
    document.getElementById("pythonButton").addEventListener("click", pythonClick);
    document.getElementById("cppButton").addEventListener("click", cppClick);
    document.getElementById("javaButton").addEventListener("click", javaClick);
    document.getElementById("resetButton").addEventListener("click", resetinput);
    document.getElementById("runButton").addEventListener("click", setvalue);
}

function acceptinput() {
    var input = document.getElementById("inputtext").text;

}

function resetinput() {
    document.getElementById("inputtext").value = "";
}



function pythonClick() {
    localStorage.setItem('lang', 'Python')
    document.getElementById("cppButton").style.backgroundColor = "#ffffff";
    document.getElementById("pythonButton").style.backgroundColor = "#ff6700";
    document.getElementById("javaButton").style.backgroundColor = "#ffffff";

    document.getElementById("cppButton").style.color = "#575757";
    document.getElementById("pythonButton").style.color = "#ffffff";
    document.getElementById("javaButton").style.color = "#575757";

}

function cppClick() {
    localStorage.setItem('lang', 'C++')
    document.getElementById("cppButton").style.backgroundColor = "#ff6700";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ffffff";

    document.getElementById("cppButton").style.color = "#ffffff";
    document.getElementById("pythonButton").style.color = "#575757";
    document.getElementById("javaButton").style.color = "#575757";
}

function javaClick() {
    localStorage.setItem('lang', 'Java')
    document.getElementById("cppButton").style.backgroundColor = "#ffffff";
    document.getElementById("pythonButton").style.backgroundColor = "#ffffff";
    document.getElementById("javaButton").style.backgroundColor = "#ff6700";

    document.getElementById("cppButton").style.color = "#575757";
    document.getElementById("pythonButton").style.color = "#575757";
    document.getElementById("javaButton").style.color = "#ffffff";
}

function setvalue() {

    localStorage.setItem("code", document.getElementById('inputtext').value)
    localStorage.setItem('input', document.getElementById('input').value)
    var data = JSON.stringify({ "code": localStorage.getItem("code") });
    console.log(data)

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById('outputtext').value = this.responseText;
            console.log(this.responseText)
        }
    });



    xhr.open("POST", "http://localhost:4000/?lang=" + localStorage.getItem("lang") + "&input=" + encodeURIComponent(localStorage.getItem("input")));
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}