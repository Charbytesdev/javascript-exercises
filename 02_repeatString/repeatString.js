const repeatString = function (word, repeats) {
  if (repeats < 0) return "ERROR";
  let outputString = "";
  for (let i = 0; i < repeats; i++) {
    outputString += word;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
