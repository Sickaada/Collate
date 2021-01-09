window.onload = function () {

	chrome.runtime.sendMessage({ fetch: "fetching" });
	document.getElementById('submitButton').addEventListener("click", setvalue)

}

function setvalue() {
	localStorage.setItem("input", document.getElementById('inputText').value)
	var data = JSON.stringify({ "code": localStorage.getItem("code") });

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
			console.log(this.responseText);
		}
	});


	xhr.open("POST", "http://localhost:4000/?lang=" + localStorage.getItem("lang") + "&input=" + encodeURIComponent(localStorage.getItem("input")));
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.send(data);

}

