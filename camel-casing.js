// Complete the solution so that the function will break up camel casing,
// using a space between words.

// Example:
// solution('camelCasing') // => should return 'camel Casing'

var string = "myVarExpression"

function solution(string) {
  var result = string.split("").map(function(char){
    var regexp = /[A-Z]/;
    var found = char.match(regexp);
    if (found) {
      return " "+char
    }return char
  });return result.join("")
}


// // Best practice solution
//
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }
