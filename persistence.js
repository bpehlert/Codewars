// Function that outputs the number of a times a set of numbers mutiply themselves together to get a single digit.

function persistence(num) {
    var nums = num.toString().split("")
    var count = 0
      while (nums.length>1) {
        var newNum = 1
        var i = 0
          while (i<nums.length) {
            newNum = newNum * nums[i]
            i++
            }
        count++
        nums = newNum.toString().split("")
      }
  return count
}
