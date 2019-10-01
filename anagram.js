// Write a function that checks if two provided strings are anagrams
// of each other; letter casing shouldn’t matter. Also, consider only characters,
// not spaces or punctuation. For example:

// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

const anagram = (string1, string2) => {
  //Create helper function to create object for string1 and string2
  //   can they can be checked against each other.
  const createCheckObj = string => {
    return string
      .toLowerCase()
      .split("")
      .reduce((obj, letter) => {
        obj[letter] = obj[letter] + 1 || 1;
        return obj;
      }, {});
  };

  const obj1 = createCheckObj(string1);
  const obj2 = createCheckObj(string2);

  // Check string2 against checkObj
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (letter in obj1) {
    if (obj1[letter] !== obj2[letter]) {
      return false;
    }
  }

  return true;
};

console.log("Ben & Neb", anagram("Ben", "neb"));
console.log("Test & Guest", anagram("Test", "Guest"));
