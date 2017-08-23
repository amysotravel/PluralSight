// JavaScript Document

// Exploring JSON

// var start = '{"favColor":"Blue", "favSeason":"Summer"}';

// var myObject = JSON.parse(start);
// console.log(myObject);

// var myString = JSON.stringify(myObject);
// console.log(myString);

// var myObject = JSON.parse(myString);
// console.log(myObject);


/////////////////////////////////////////////////

// Single level JSON 

// var theData1 = '{"first":"Paul", "last":"Cheney", "city":"Salem"}';
// var myObj = JSON.parse(theData1);
// console.log(myObj);

// document.getElementById('message').innerHTML = myObj.city;

///////////////////////////////////////////////////

// Double level JSON

// var theData2 = '{"Jane":{"age":"29","degree":"MFA"}, "Jim":{"age":"49","degree":"MA"}}';
// var myObj = JSON.parse(theData2);
// console.log(myObj);

// document.getElementById('message').innerHTML = myObj.Jane.age;

///////////////////////////////////////////////////

// Triple level JSON

// var theData2 = '{"Jane":{"age":"29","degree":{"AAS":"VMI","BA":"UVA"}}, "Jim":{"age":"49","degree":"MA"}}';
// var myObj = JSON.parse(theData2);
// console.log(myObj);

// document.getElementById('message').innerHTML = myObj.Jane.degree.BA;

var xhr = new XMLHttpRequest();

xhr.open('GET','data.json',true);

xhr.send();

xhr.onreadystatechange = function() {
	
	console.log(xhr.readyState);
	console.log(xhr.status);
	
	} //end function


