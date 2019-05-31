// Task
// A game I played when I was young: Draw 4 cards from playing cards, use + - * / and () to make the final results equal to 24.

// You will coding in function equalTo24. Function accept 4 parameters a b c d(4 cards), value range is 1-13.

// The result is a string such as "2*2*2*3" ,(4+2)*(5-1); If it is not possible to calculate the 24, please return "It's not possible!"

// All four cards are to be used, only use three or two cards are incorrect; Use a card twice or more is incorrect too.

// You just need to return one correct solution, don't need to find out all the possibilities.

// Solution by Bubbler

function equalTo24(a, b, c, d) {
  let permutations = [
    [a, b, c, d],
    [a, b, d, c],
    [a, c, b, d],
    [a, c, d, b],
    [a, d, b, c],
    [a, d, c, b],
    [b, a, c, d],
    [b, a, d, c],
    [b, c, a, d],
    [b, c, d, a],
    [b, d, a, c],
    [b, d, c, a],
    [c, a, b, d],
    [c, a, d, b],
    [c, b, a, d],
    [c, b, d, a],
    [c, d, a, b],
    [c, d, b, a],
    [d, a, b, c],
    [d, a, c, b],
    [d, b, a, c],
    [d, b, c, a],
    [d, c, a, b],
    [d, c, b, a]
  ];
  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };
  let parens = {
    "((a op1 b) op2 c) op3 d": (a, b, c, d, op1, op2, op3) =>
      op3(op2(op1(a, b), c), d),
    "(a op1 (b op2 c)) op3 d": (a, b, c, d, op1, op2, op3) =>
      op3(op1(a, op2(b, c)), d),
    "(a op1 b) op2 (c op3 d)": (a, b, c, d, op1, op2, op3) =>
      op2(op1(a, b), op3(c, d)),
    "a op1 ((b op2 c) op3 d)": (a, b, c, d, op1, op2, op3) =>
      op1(a, op3(op2(b, c), d)),
    "a op1 (b op2 (c op3 d))": (a, b, c, d, op1, op2, op3) =>
      op1(a, op2(b, op3(c, d)))
  };
  for (let permutation of permutations) {
    let a = permutation[0];
    let b = permutation[1];
    let c = permutation[2];
    let d = permutation[3];
    for (let op1 in operators) {
      for (let op2 in operators) {
        for (let op3 in operators) {
          for (let paren in parens) {
            if (
              parens[paren](
                a,
                b,
                c,
                d,
                operators[op1],
                operators[op2],
                operators[op3]
              ) == 24
            ) {
              return paren
                .replace("a", a)
                .replace("b", b)
                .replace("c", c)
                .replace("d", d)
                .replace("op1", op1)
                .replace("op2", op2)
                .replace("op3", op3);
            }
          }
        }
      }
    }
  }
  return "It's not possible!";
}
