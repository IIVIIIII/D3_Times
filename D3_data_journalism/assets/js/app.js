// @TODO: YOUR CODE HERE!


// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("assets/data/data.csv").then(data => {
    // console.log(data)

    console.log(d3.extent(data.map(d => parseFloat(d.poverty))))

    var xScale = d3.scaleLinear()
      .domain(d3.extent(data.map(d => parseFloat(d.poverty))))
      .range([0, width])




})