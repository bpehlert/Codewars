// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples:
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


// var parens = ")(()))"

function validParentheses(parens){
  if (parens[0] == ")" || parens[parens.length-1] == "(") {
    return false
  }
  if (parens.split("").sort()[(parens.length/2)-1] == parens.split("").sort()[(parens.length/2)]) {
    return false
  }return true
}

// More streamlined solution:

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
//
//   return n == 0;
// }
