// from data.js
var ufoData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(ufoData) {
  // Clear out any existing data
  tbody.html("");

  // Loop through each object in ufoData
  // and append rows and cells for each value
  ufoData.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through the 
// `date/time` , `city`, `state`, `country`, and `shape` columns 
// to find rows that match user input.



function handleClick() {

  // prevent refresh 
  d3.event.preventDefault();

  // Get the date value from the filter
  var date = d3.select("#datetime").property("value");

  // Get the city value from the filter
  var city = d3.select("#city").property("value");

  // Get the state value from the filter
  var state = d3.select("#state").property("value");

  // Get the country value from the filter
  var country = d3.select("#country").property("value");

  // Get the shape value from the filter
  var shape = d3.select("#shape").property("value");

  let filteredData = ufoData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Check to see if a city was entered and filter the
  // data using that city.
  if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `city` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
  }

  // Check to see if a state was entered and filter the
  // data using that state.
  if (state) {
    // Apply `filter` to the table data to only keep the
    // rows where the `state` value matches the filter value
    filteredData = filteredData.filter(row => row.state === state);
  }

  // Check to see if a country was entered and filter the
  // data using that country.
  if (country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === country);
  }

  // Check to see if a shape was entered and filter the
  // data using that shape.
  if (shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `shape` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === shape);
  }


 // filter the table 
  buildTable(filteredData);
}

// click button event 
d3.selectAll("#filter-btn").on("click", handleClick);



// load page default when page loads 
buildTable(ufoData);