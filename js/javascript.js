	$(document).ready(function(){
		var lon;
		var lat;
		var ftemp;
		var kelvin;
		var ctemp;
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				lon=position.coords.longitude;
				lat=position.coords.latitude;
				//$("#data").html("latitude: "+lat+"<br> longitude: "+lon);
				 var api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=ccf21dcdd0ff2be95c954f74ff270ed8";
				  $.getJSON(api,function(data){
    //alert(data.coord.lat);
    				var weatherType=data.weather[0].description;
    				kelvin = data.main.temp;
    				var windSpeed = data.wind.speed;
    				var city = data.name;
    				//console.log(city);
    				//console.log(api);
    				ftemp = (kelvin)*(9/5)+459.62;
    				ctemp = kelvin - 273;	
    				console.log(ctemp);
    				console.log(ftemp);
    				$("#city").html(city);
    				$("#weatherType").html(weatherType);
    				$("#fTemp").html(ftemp);
    				$("#windSpeed").html(windSpeed);
    				var tempSwap=false;	
    				$("#fTemp").click(function(){
    					if(tempSwap===false){
    						$("#fTemp").html(ctemp);
    						tempSwap=true;

    					}
    					else{
    						$("#fTemp").html(ftemp);
    						tempSwap=false;
    					}
    				});

				  });
			});
		}
		
 
});