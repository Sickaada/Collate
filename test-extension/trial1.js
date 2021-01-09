document.addEventListener("keydown", (e)=> {
    if(e.ctrlKey && e.keyCode == 66)
    {
        var selectedText = '';
        if(window.getSelection)
        {
            selectedText = window.getSelection();
        }
        alert(selectedText);
    }
});
