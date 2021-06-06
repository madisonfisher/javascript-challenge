// getting filter button selected as input
var button = d3.select("#filter");

// getting the date as input
var dateSelected = d3.select("#date");

//reference to the table
var tbody = d3.select("tbody");

console.log(data);

button.on("click", function () {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
});

data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });