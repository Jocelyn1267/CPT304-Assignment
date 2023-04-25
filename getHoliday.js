function getHoliday() {
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("Countrycode").value;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://public-holiday.p.rapidapi.com/" + year + "/" + countrycode,
        "dataType": "json",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8fa41453f69mshd35d3154a35775ep1adb88jsna2bf7401a6ae",
            "x-rapidapi-host": "public-holiday.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var holidays = response;
        var table = "<tr><th>Name</th><th>Local Name</th><th>Date</th></tr>";
        for (var i = 0; i < holidays.length; i++) {
            table += "<tr><td>" + holidays[i].name + "</td><td>" + holidays[i].localName + "</td><td>" + holidays[i].date + "</td></tr>";
        }
        document.getElementById("holidayTable").innerHTML = table;
    });
}
