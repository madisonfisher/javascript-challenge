// getting filter button selected as input
var button = d3.select("#filter");

// getting the date as input
var dateSelected = d3.select("#date");

//reference to the table
var tbody = d3.select("tbody");

button.on("click", function () {
    //preventing refresh
    d3.event.preventDefault();
    // getting the date as input
    var dateSelected = d3.select("#date");
    //getting date as value
    var inputDate = dateSelected.property("value");

    //reference to the city select
    var citySelect = d3.select("#city");
    //getting city as value
    var inputCityValue = citySelect.property("value");
    var inputCity = inputCityValue.toLowerCase();

    //reference to the shape select
    var shapeSelect = d3.select("#shape");
    //getting shape as value
    var inputShape = shapeSelect.property("value");

    function filterByDate(sighting) {
        return sighting.datetime === inputDate 
        }
    function filterByCity(sighting) {
        return sighting.city === inputCity
        }
    function filterByShape(sighting) {
        return sighting.shape === inputShape 
        }

    if (inputDate === "") {
        var filtedSightings1 = data.filter(filterByCity);
        var filtedSightings = filtedSightings1.filter(filterByShape);
    }
    else if (inputCity === "") {
        var filtedSightings1 = data.filter(filterByDate);
        var filtedSightings = filtedSightings1.filter(filterByShape);
    }
    else if (inputCity === "" && inputDate === "") {
        var filtedSightings = data.filter(filterByShape);
    }
    else {
        var filtedSightings1 = data.filter(filterByDate);
        var filtedSightings2 = filtedSightings1.filter(filterByCity);
        var filtedSightings = filtedSightings2.filter(filterByShape);
    }

    //removed original table to allow for only filtered rows to show up
    tbody.html("");

    // adding rows to the table
    filtedSightings.forEach(function (UFO) {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// adding rows to the table for when pages loads in 
data.forEach(function (UFO) {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});