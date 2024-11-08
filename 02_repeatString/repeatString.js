const repeatString = function (kata, jumlah) {
  if (jumlah < 0) {
    return "ERROR";
  }
  let string = "";
  for (let i = 0; i < jumlah; i++) {
    string += kata;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
