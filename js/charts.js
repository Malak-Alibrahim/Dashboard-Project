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
        label: "Orders by month",
        data: [15, 28, 33, 54, 160, 210, 190],
        borderColor: "rgba(220, 92, 124, 1)",
        borderWidth: 2,
        fill: true,
        backgroundColor: ["rgb(155,152,174)"]
      },
    ],
  },
  options: {
    tension: 0.3,
    plugins: {
      legend: {
        display: false,
      },
    },

  },
});

new Chart("myBarChart", {
  type: "bar",
  data: {
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
        label: "Male",
        data: [78, 128, 133, 254, 110, 84, 190],
        backgroundColor: "rgb(64, 29, 186)",
        borderWidth: 1,
      },
      {
        label: "Female",
        data: [130, 121, 77, 90, 189, 210, 294],
        backgroundColor: "rgba(218, 65, 103, 1)",
        borderWidth: 1,
      },
    ],
  },
});

new Chart("myPieChart", {
  type: "pie",
  data: {
    labels: ["Riyadh", "Dammam", "Jeddah"],
    datasets: [
      {
        data: [112, 218, 95],
        backgroundColor: [
          "rgba(220, 92, 124, 1)",
          "rgb(64, 29, 186)",
          "rgb(192,192,192)",
        ],
      },
    ],
  },
  options: {
    // maintainAspectRatio: false,
    aspectRatio: 2,
    legend: {
      display: false
    },
  },
});

new Chart("myLinearChart", {
  type: "line",
  data: {
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
        label: "Rate",
        data: [1, 2.9, 3.2, 3.5, 4.6, 4, 3.5],
        borderColor: "rgba(220, 92, 124, 1)",
        fill: true,
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
