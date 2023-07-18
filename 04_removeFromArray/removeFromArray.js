const removeFromArray = function (arr, ...args) {
  arr = arr.filter((e) => !args.includes(e));
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
