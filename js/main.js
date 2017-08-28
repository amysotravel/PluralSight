// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        
		for(i=0; i<myStuff.presidents.length;i++){
			console.log(myStuff.presidents[i].first);
					console.log(myStuff.presidents[i].last);
		}//end loop
    
    } // end if
} // end function

