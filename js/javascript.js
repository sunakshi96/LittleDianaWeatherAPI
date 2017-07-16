	$(document).ready(function(){
		var lon;
		var lat;
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				lon=position.coords.longitude;
				lat=position.coords.latitude;
				//$("#data").html("latitude: "+lat+"<br> longitude: "+lon);
				 var api="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=ccf21dcdd0ff2be95c954f74ff270ed8";
				  $.getJSON(api,function(data){
    //alert(data.coord.lat);
    				var weatherType=data.weather[0].description;
    				var kelvin = data.main.temp;
    				var windSpeed = data.wind.speed;
    				var city = data.name;
    				console.log(city);
    				console.log(api);
				  });
			});
		}
		
 
});