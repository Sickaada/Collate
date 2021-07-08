window.onload = function () {

	chrome.runtime.sendMessage({ fetch: "fetching" });
	document.getElementById('submitButton').addEventListener("click", setvalue)
	document.getElementById('editButton').addEventListener("click", redirectToEditor)
	document.getElementById('resetButton').addEventListener("click", reset)

}
function reset() {
	document.getElementById('inputText').value = ""
}

function setvalue() {
	localStorage.setItem("input", document.getElementById('inputText').value)
	localStorage.setItem("lang", document.getElementById("languages").value);
	var data = JSON.stringify({ "code": localStorage.getItem("code") });


	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
			document.getElementById("outputText").value = this.responseText;
		}
	});
	if (localStorage.getItem('lang') === 'C++') {
		localStorage.setItem('lang', 'Cpp')
			(localStorage.getItem('lang'))
	}


	xhr.open("POST",  process.env.baseURL + "?lang=" + localStorage.getItem("lang") + "&input=" + encodeURIComponent(localStorage.getItem("input")));
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(data);

}

function redirectToEditor() {
	chrome.tabs.create({ url: "mainpage.html" }, function (tab) { alert(tab.id) });
}



