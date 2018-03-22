
// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// var words = ['aabb', 'abcd', 'bbaa', 'dada']
// var word = 'abba'

function anagrams(word, words) {
  var anagramArr = []
  for (var i = 0; i < words.length; i++) {
    if (word.split("").sort().toString() == words[i].split("").sort().toString()) {
      anagramArr.push(words[i]);
    }
  }return anagramArr
}
