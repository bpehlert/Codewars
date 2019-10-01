// palindrome('racecar')  ===  true
// palindrome('table')  ===  false

const isPalindrome = string => {
  const check = string
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return check === string.toLowerCase();
};

isPalindrome("Hannah");
