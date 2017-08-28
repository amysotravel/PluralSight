// JavaScript Document

var xhr = XMLHttpRequest();
xhr.open('GET', "data.JSON", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
	
	if(xhr.status=200){
		myStuff = JSON.parse(xhr.responseText);
		console.log(myStuff);
		console.log(myStuff[0].first);
	}//end of if 
} //end of function