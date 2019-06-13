// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

const ultimateReverse = s => {
  const str = s
    .join("")
    .split("")
    .reverse()
    .join("");

  let result = [];
  let place = 0;

  s.forEach(e => {
    result.push(str.slice(place, place + e.length));
    place = place + e.length;
  });

  return result;
};
