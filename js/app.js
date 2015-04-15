// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Doughnut Chart for Weekly Goals
var fundingTotal = [
  {
    value: 2107,
    color:"#9822C0"
  },
  {
    value : 6393,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 50
};
var fundChart = $("#fundingTotal").get(0).getContext("2d");
var myfundChart = new Chart(fundChart).Doughnut(fundingTotal, options);