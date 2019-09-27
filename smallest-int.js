const a = [1, 2, 3];
const b = [1, 3, 6, 4, 1, 2];
const c = [-1, -3, 1, 2, 3, 5];

function solution(A) {
  A.sort((a, b) => {
    return a - b;
  });

  const store = {
    lastNum: 1,
    lastLowest: 0
  };

  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (element > 1) {
      if (element - store.lastNum == 1 || element - store.lastLowest == 0) {
        store.lastNum = element;
        store.lastLowest = element;
      } else {
        return store.lastNum + 1;
      }
    }
  }
  return store.lastLowest + 1;
}

// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
