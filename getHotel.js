function getHotels() {
	var city = document.getElementById("city").value;
	var getHotelsettings = {
		"async": true,
		"crossDomain": true,
		"url": "https://hotels4.p.rapidapi.com/locations/search?query=" + city + "&locale=en_US",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "fa41453f69mshd35d3154a35775ep1adb88jsna2bf7401a6ae",
			"x-rapidapi-host": "hotels4.p.rapidapi.com"
		}
    };
	$.ajax(getHotelsettings).done(function(response) {
	  var hotelList = response.suggestions[1].entities.filter(function(entity) {
		return entity.type === "HOTEL";
	  });
	  var table = "<tr><th>Latitude</th><th>Longitude</th><th>Caption</th><th>Name</th></tr>";
	  for (var i = 0; i < hotelList.length; i++) {
		var latitude = hotelList[i].latitude;
		var longitude = hotelList[i].longitude;
		var caption = hotelList[i].caption;
		var name = hotelList[i].name;
		table += "<tr><td>" + latitude + "</td><td>" + longitude + "</td><td>" + caption + "</td><td>" + name + "</td></tr>";
	  }
	  document.getElementById("hotelTable").innerHTML = table;
	});
  }
