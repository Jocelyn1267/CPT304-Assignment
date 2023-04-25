// function getweather() {
//     var city = document.getElementById("city").value;
//     var countrycode = document.getElementById("Countrycode").value;
//     var textori;
//     var textnew = '';
//     var weathersettings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://aerisweather1.p.rapidapi.com/forecasts/"+city+","+countrycode+"?plimit=24",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
//             "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
// 	    }
//     };
//     $.ajax(weathersettings).done(function (response) {
//     	console.log(JSON.stringify(response.response[0].periods[0].validTime,null,4));
//         console.log(typeof(response.response[0].periods));
//         console.log(typeof(response.response[0].periods[0]));
//     	textori = response.response[0].periods.length;
//     	text = JSON.stringify(response.response[0].periods,null,4);
//         for (var i = 0,len = textori; i<len;i++){
//         if(i==0){
//             textnew = " validTime: "+ response.response[0].periods[i].validTime +"\n minTempC: " + response.response[0].periods[i].minTempC
//             +"\n maxTempC: " +response.response[0].periods[i].maxTempC
//         }else{
//             textnew = textnew+ "\n validTime: "+ response.response[0].periods[i].validTime +"\n minTempC: " + response.response[0].periods[i].minTempC
//                                            +"\n maxTempC: " +response.response[0].periods[i].maxTempC
//         }
//         document.getElementById("weatherlist").innerHTML= "weatherlist:\n" + textnew;
//         }
//     });


// }

function getweather() {
    var city = document.getElementById("city").value;
    var countrycode = document.getElementById("Countrycode").value;
    var weatherTable = document.getElementById("weatherTable");

    var weathersettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://aerisweather1.p.rapidapi.com/forecasts/"+city+","+countrycode+"?plimit=24",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
            "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
        }
    };
    
    $.ajax(weathersettings).done(function (response) {
        var weatherData = response.response[0].periods;
        var tableHTML = '<tr><th>Valid Time</th><th>Min Temp(C)</th><th>Max Temp(C)</th></tr>';

        for (var i = 0, len = weatherData.length; i < len; i++) {
            var row = '<tr>';
            row += '<td>' + weatherData[i].validTime + '</td>';
            row += '<td>' + weatherData[i].minTempC + '</td>';
            row += '<td>' + weatherData[i].maxTempC + '</td>';
            row += '</tr>';
            tableHTML += row;
        }

        weatherTable.innerHTML = tableHTML;
    });
}
