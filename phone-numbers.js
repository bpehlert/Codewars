// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
  var phoneNumber = ""
  for (var i = 0; i < numbers.length; i++) {
    var char = ""
    char = (i === 0) ? "(" : char;
    char = (i === 3) ? ") " : char;
    char = (i === 6) ? "-" : char;
    phoneNumber = phoneNumber + char + numbers[i]
  } return phoneNumber
}
