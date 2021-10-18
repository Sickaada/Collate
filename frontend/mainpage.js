const buttons = [
                    { id: 'pythonButton', lang: 'Python'},
                    { id: 'cppButton', lang: 'Cpp'}, 
                    { id: 'javaButton', lang: 'Java'}
                ];
const elements = {};
const reset = document.getElementById("resetBtn")
const run = document.getElementById("runBtn")

window.onload = function () {
    var a = localStorage.getItem("lang");
    document.getElementById("inputtext").value = localStorage.getItem("code");

    buttons.forEach(button => {
        const element = document.getElementById(button.id)
        elements[button.id] = element;
        element.addEventListener("click", handleClick);
    })

    if (a) {
        const activeId = buttons.filter(b => b.lang == a)[0].id;
        elements[activeId].classList.add('active');
    }
    else { elements['pythonButton'].classList.add('active'); }

    reset.addEventListener("click", resetinput);
    run.addEventListener("click", setvalue);

}

function acceptinput() {
    var input = document.getElementById("inputtext").text;
}

function resetinput() {
    document.getElementById("inputtext").value = "";
}

function handleClick(e) {
    const clickId = e.target.id;
    const lang = buttons.filter(button => button.id == clickId)[0].lang;
    localStorage.setItem('lang', lang);
    buttons.forEach( button => { 
        const [element, elementId] = [elements[button.id], button.id];
        if (element.classList.contains('active') && elementId !== clickId) {element.classList.remove('active')}
        else if (element.classList.contains('active') == false && elementId == clickId) {element.classList.add('active')}
    });
}

function setvalue() {

    localStorage.setItem("code", document.getElementById('inputtext').value)
    localStorage.setItem('input', document.getElementById('input').value)
    var data = JSON.stringify({ "code": localStorage.getItem("code") });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            document.getElementById('outputtext').value = this.responseText;

        }
    });

    // if (localStorage.getItem('lang') === 'C++') {
    //     localStorage.setItem('lang', 'Cpp') // changed from C++ to Cpp because of reading error during post request
    // }

    xhr.open("POST", "http://localhost:4000/?lang=" + localStorage.getItem("lang") + "&input=" + encodeURIComponent(localStorage.getItem("input")));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

}