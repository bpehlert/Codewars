const isPalindrome = function(x) {
  const arr = x.toString().split("");
  let result = true;
  arr.forEach((element, i) => {
    if (element !== arr[arr.length - 1 - i]) {
      result = false;
    }
  });
  return result;
};
