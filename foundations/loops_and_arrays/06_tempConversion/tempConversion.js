const convertToCelsius = function(temp) {
  let total = (temp - 32) * 5/9
  console.log(total)
  return Number(total.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  let total = (temp * 9/5 ) + 32
  console.log(total)
  return Number(total.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
