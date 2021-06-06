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
    //creating date filter
    function filterByDate(sighting) {
        return sighting.datetime === inputDate;
    }
    console.log(inputDate);
    //filtering for only that date
    var filtedSightings = data.filter(filterByDate);
    console.log(filtedSightings);

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