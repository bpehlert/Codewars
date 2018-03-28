// There is a secret string which is unknown to you. Given a collection of random
// triplets from the string, recover the original string.
//
// A triplet here is defined as a sequence of three letters such that each letter
// occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
//
// As a simplification, you may assume that no letter occurs more than once in the secret string.
//
// You can assume nothing about the triplets given to you other than that they
// are valid triplets and that they contain sufficient information to deduce the
// original string. In particular, this means that the secret string will never
// contain letters that do not occur in one of the triplets given to you.


var triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

function recoverSecret(triplets) {
  var col1 = []
  var col2 = []
  var col3 = []
  var result = ""

// pulls out the three different columns of the array.
  for (var i = 0; i < triplets.length; i++) {
    col1[i] = triplets[i][0]
    col2[i] = triplets[i][1]
    col3[i] = triplets[i][2]
  }

  for (var i = 0; i < col1.length; i++) {
    if (col2.indexOf(col1[i]) >= 0 || col3.indexOf(col1[i]) >=0 ) {
      continue
    }else {
      result = result + col1[i]
      col1.splice(col1.indexOf(col1[i]),1)
    }
  }

  console.log(col1);
  return result
}
