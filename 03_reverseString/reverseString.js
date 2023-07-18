const reverseString = function (inputString) {
  reverse = "";
  for (i = inputString.length - 1; i >= 0; i--) {
    reverse += inputString.charAt(i);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
