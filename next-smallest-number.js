// Write a function that takes a positive integer and returns the next smaller
// positive integer containing the same digits.
//
// For example:
//
// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1, when there is no smaller number that contains the same digits.
// Also return -1 when the next smaller number with the same digits would
// require the leading digit to be zero.
//
// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

let n = 1027;

function nextSmaller(n) {
  let nStr = n.toString();
  let nArr = [];
  for (var i = 0; i < nStr.length; i++) {
    nArr.push(nStr[i]);
  }
  if (nArr[nArr.length-1] < nArr[nArr.length-2]) {
    return nArr[nArr.length-1] + nArr[nArr.length-2];
  }else {
    let sum = Number(nArr.pop())+1 + nArr.pop()*10;
    let sum = n - sum;
    if (sum.length < n.length) {

    }


    // (n - (nArr.pop()+1) - (nArr.pop()*10))

  };
}
