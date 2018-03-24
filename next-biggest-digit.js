// You have to create a function that takes a positive
// integer number and returns the next bigger number
// formed by the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071


// TO SOLVE!



// var n = 1234
//
// function nextBigger(n){
//   var num = n.toString()
//   var numArr = []
//   x = 0
//
//   for (var i = 0; i < num.length; i++) {
//     for (var x = x; x < num.length; x++) {
//       var digits = num[x]
//       for (var y = 0; y < num.length; y++) {
//         if (y !== x) {
//           digits = digits + num[y]
//         }
//       numArr[x] = digits
//       }
//     }
//   }return numArr
// }
