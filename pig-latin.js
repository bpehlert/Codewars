// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !
//

// var str = "Pig latin is cool!"

function pigIt(str) {

  var regexp = /[!?,.]/i;
  var found = str.match(regexp);
  var pig = ""

  if (found == null) {
    var words = str.split(" ")
    for (var i = 0; i < words.length; i++) {
      var letters = words[i].slice(0,1)
      words[i] = words[i].slice(1)
      words[i] = words[i].concat(letters).concat("ay")
      pig = pig + words[i] + " "
    }return pig.slice(0,-1)
  }else {
    var words = str.replace(found[0],"")
    var words = words.split(" ")
    for (var i = 0; i < words.length; i++) {
      var letters = words[i].slice(0,1)
      words[i] = words[i].slice(1)
      words[i] = words[i].concat(letters).concat("ay")
      pig = pig + words[i] + " "
    }return pig.slice(0,-1) + found[0]
  }
}
