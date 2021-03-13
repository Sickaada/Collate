var python = document.getElementById("pythonButton")
var cpp = document.getElementById("cppButton")
var java = document.getElementById("javaButton")
var reset = document.getElementById("resetBtn")
var run = document.getElementById("runBtn")
window.onload = function () {
    var a = localStorage.getItem("lang");
    document.getElementById("inputtext").value = localStorage.getItem("code");
    if (a === 'Python') { pythonClick() }
    // else if (a === 'C++') { cppClick() }
    else if (a === "Java") { javaClick() }

    python.addEventListener("click", pythonClick);
    cpp.addEventListener("click", cppClick);
    java.addEventListener("click", javaClick);
    reset.addEventListener("click", resetinput);
    run.addEventListener("click", setvalue);

}

function acceptinput() {
    var input = document.getElementById("inputtext").text;
}

function resetinput() {
    console.log("hey")
    document.getElementById("inputtext").value = "";
}



function pythonClick() {
    localStorage.setItem('lang', 'Python')
    python.style.backgroundColor = "#232b41";
    python.style.color = "#2da2e7";
    python.style.fontWeight = "bolder";

    cpp.style.color = "#FFFFFF";
    java.style.color = '#FFFFFF';



}

function cppClick() {
    localStorage.setItem('lang', 'C++')
    cpp.style.backgroundColor = "#232b41";
    cpp.style.color = "#2da2e7";
    cpp.style.fontWeight = "bolder"
    python.style.color = "#FFFFFF";
    java.style.color = '#FFFFFF';
}

function javaClick() {
    localStorage.setItem('lang', 'Java')
    java.style.backgroundColor = "#232b41";
    java.style.color = "#2da2e7";
    java.style.fontWeight = "bolder"
    python.style.color = "#FFFFFF";
    cpp.style.color = '#FFFFFF';

}

function setvalue() {

    localStorage.setItem("code", document.getElementById('inputtext').value)
    console.log()
    localStorage.setItem('input', document.getElementById('input').value)
    var data = JSON.stringify({ "code": localStorage.getItem("code") });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById('outputtext').value = this.responseText;

        }
    });

    if (localStorage.getItem('lang') === 'C++') {
        localStorage.setItem('lang', 'Cpp') // changed from C++ to Cpp because of reading error during post request
        console.log(localStorage.getItem('lang'))
    }

    xhr.open("POST", "http://52.172.170.205:4000/?lang=" + localStorage.getItem("lang") + "&input=" + encodeURIComponent(localStorage.getItem("input")));
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log("heheh")
    xhr.send(data);

}