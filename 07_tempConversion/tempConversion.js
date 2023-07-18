const convertToCelsius = function (fahrenheitTemp) {
  let number = ((fahrenheitTemp - 32) * 5) / 9;
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function (celciusTemp) {
  let number = (celciusTemp * 9) / 5 + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
