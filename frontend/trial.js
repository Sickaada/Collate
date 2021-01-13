// port = chrome.runtime.connect({name: "knockknock"});
// console.log(port);

document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 66) {
        // selected text
        var selectedText = '';
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        }
        alert("Your code has been copied! Run through the extension and put input if necessary!!");

        chrome.runtime.sendMessage({ greeting: selectedText });
    }
});
