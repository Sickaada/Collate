function testFunction() 
{
	var code = document.getElementById("inputText").value;
	console.log(code);
	var val = 0;
	for( i=0 ; i<code.length; i++)
	{
		console.log(val);
		val = val + code.charCodeAt(i);
	}
	document.getElementById("outputText").value = val + " is the answer\n bruh \n";
}