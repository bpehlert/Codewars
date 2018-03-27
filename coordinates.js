// You need to create a function that will validate if given parameters are valid geographical coordinates.
// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.
// Latitude (which is first float) can be between 0 and 90, positive or negative.
// Longitude (which is second float) can be between 0 and 180, positive or negative.
// Coordinates can only contain digits, or one of the following symbols (including space after comma) -, .
// There should be no space between the minus "-" sign and the digit after it.
//
// Here are some valid coordinates:
//
// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -36

// var coordinates = "-23, -25"

function isValidCoordinates(coordinates){
  if (coordinates.match(/([a-z!@#$%^&*])/i) || coordinates.indexOf("- ") !==-1 || coordinates.split(",").length > 2) {
    return false
  }
  if (90 > Math.abs(coordinates.split(",")[0]) > 0 && 180 > Math.abs(coordinates.split(",")[1]) > 0) {
    return true
  }else {
    return false
  }
}

// Some clever regular expression.
//
// function isValidCoordinates(coordinates){
//   return /^\-?([0-8]\d|90|\d)(\.\d*)?, ?\-?(1[0-7]\d|\d\d?|180)(\.\d*)?$/.test(coordinates);
// }
