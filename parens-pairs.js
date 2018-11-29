// Write a function which makes a list of strings representing
// all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n, match = 0, str = "", res = []) {
  if (n) balancedParens(n - 1, match + 1, str + "(", res);
  if (match) balancedParens(n, match - 1, str + ")", res);
  if (!n && !match) res.push(str);
  return res;
}

console.log(balancedParens(10));
