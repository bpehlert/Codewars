// Create a for loop that iterates up to 100 while outputting "fizz"
// at multiples of 3, "buzz" at multiples of 5
// and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1; i < 100; i++) {
  let fizz = i % 3 === 0;
  let buzz = i % 5 === 0;
  let print = "";

  if (fizz && buzz) {
    print = "fizzbuzz";
  } else if (fizz) {
    print = "fizz";
  } else if (buzz) {
    print = "buzz";
  } else {
    print = i;
  }

  console.log(print);
}
