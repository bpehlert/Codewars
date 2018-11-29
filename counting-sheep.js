// Consider an array of sheep where some sheep may be missing
// from their place. We need a function that counts the number
// of sheep present in the array (true means present).

// For example,

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
];

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  const number = arrayOfSheep.reduce((acc, sheep) => {
    return sheep ? (acc += 1) : acc;
  }, 0);
  return number;
}

console.log(countSheeps(array1));

// function countSheeps(arrayOfSheeps) {
//    return arrayOfSheeps.filter(Boolean).length;
//  }
