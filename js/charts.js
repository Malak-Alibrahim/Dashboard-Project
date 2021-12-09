// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

new Chart("myAreaChart", {
  type: "line",
  data: {
    //Utils.months({count: 7})
    labels: [
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Orders",
        data: [15, 28, 33, 54, 160, 210, 190],
        borderColor: "rgb(75, 192, 192)",
        fill: true,
        borderWidth: 3,
      },
    ],
  },
});
