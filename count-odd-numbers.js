// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

function oddCount(n) {
  return n % 2 === 0 ? n / 2 : (n - 1) / 2;
}

// Looping option, but much too slow. Easier method above.

// function oddCount(n) {
//   let count = 0;
//   const counter = n => {
//     while (n > 0) {
//       n = n - 2;
//       count++;
//     }
//   };

//   if (n % 2) {
//     counter(n);
//     return count - 1;
//   }

//   n = n - 1;
//   counter(n);
//   return count;
// }
