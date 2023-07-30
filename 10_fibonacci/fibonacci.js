const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let prev = 1;
  let prevprev = 0;
  let output = 1;
  for (let i = 1; i < num; i++) {
    output = prev + prevprev;
    prevprev = prev;
    prev = output;
  }
  return output;
};

// Do not edit below this line
module.exports = fibonacci;
