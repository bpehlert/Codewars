// Function that reverses words in string that are 5 or more characters long.

function spinWords(str) {
  var words = str.split(" ")
  var newStr = ""

  for (var i = 0; i < words.length; i++) {
    if (words[i].length >=5) {
      rWord = " " + words[i].split("").reverse().join("")
      newStr = newStr + rWord
    }else {
        newStr = newStr + " " + words[i]
      }
    }

  newStr = newStr.slice(1);
  return newStr
}
