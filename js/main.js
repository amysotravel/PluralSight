/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'https://api.wunderground.com/api/d60ccdba880309bb/conditions/q/84062.json', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
document.getElementById('weather').innerHTML = cObj.current_observation.weather;
document.getElementById('temperature').innerHTML = cObj.current_observation.temp_f;

    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', 'https://api.wunderground.com/api/d60ccdba880309bb/forecast/q/84062.json', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
	document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday[0].fcttext;

	
	document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
	document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit+"°";
	document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit+"°";
	
	var imagePath = fobj..forecast.simpleforecast.forecastday[1].icon_url;
	
} //end if
}; //end function


