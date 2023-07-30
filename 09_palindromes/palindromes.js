const palindromes = function (s) {
  let normal = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = normal.split("").reverse().join("");
  return normal === reversed;
};

// Do not edit below this line
module.exports = palindromes;
