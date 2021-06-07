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

    //reference to the country select
    var countrySelect = d3.select("#country");
    //getting country as value
    var inputCountryValue = countrySelect.property("value");
    var inputCountry = inputCountryValue.toLowerCase();

    //reference to the state select
    var stateSelect = d3.select("#state");
    //getting state as value
    var inputStateValue = stateSelect.property("value");
    var inputState = inputStateValue.toLowerCase();

    function filterByDate(sighting) {
        return sighting.datetime === inputDate 
        }
    function filterByCity(sighting) {
        return sighting.city === inputCity
        }
    function filterByShape(sighting) {
        return sighting.shape === inputShape 
        }
    function filterByCountry(sighting) {
        return sighting.country === inputCountry
    }
    function filterByState(sighting) {
        return sighting.state === inputState
    }

    if (inputDate === "") {
        var filtedSightings1 = data.filter(filterByCity);
        var filtedSightings2 = filtedSightings1.filter(filterByShape);
        var filtedSightings3 = filtedSightings2.filter(filterByCountry);
        var filtedSightings = filtedSightings3.filter(filterByState);
    }
    else if (inputCity === "") {
        var filtedSightings1 = data.filter(filterByDate);
        var filtedSightings2 = filtedSightings1.filter(filterByShape);
        var filtedSightings3 = filtedSightings2.filter(filterByCountry);
        var filtedSightings = filtedSightings3.filter(filterByState);
    }
    else if (inputCity === "" && inputDate === "") {
        var filtedSightings1 = data.filter(filterByShape);
        var filtedSightings2 = filtedSightings1.filter(filterByCountry);
        var filtedSightings = filtedSightings2.filter(filterByState);
    }
    else {
        var filtedSightings1 = data.filter(filterByDate);
        var filtedSightings2 = filtedSightings1.filter(filterByCity);
        var filtedSightings3 = filtedSightings2.filter(filterByShape);
        var filtedSightings4 = filtedSightings3.filter(filterByCountry);
        var filtedSightings = filtedSightings4.filter(filterByState);
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