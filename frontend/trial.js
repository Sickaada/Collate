document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 66) {
        // selected text
        var selectedText = '';
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
            selectedText = filterText(selectedText);
        }
        alert("Your code has been copied! Run through the extension and put input if necessary!!");

        chrome.runtime.sendMessage({ greeting: selectedText });
    }
});

function filterText(unfilteredString) {
    var filteredString = '';
    for(i = 0; i<unfilteredString.length; i++){
        if(unfilteredString.charCodeAt(i)>=32 && unfilteredString.charCodeAt(i)<=127) 
            filteredString += unfilteredString[i];
        else if(unfilteredString.charCodeAt(i)>=8 && unfilteredString.charCodeAt(i)<=13)
            filteredString += unfilteredString[i];
    }
    return filteredString;
}
