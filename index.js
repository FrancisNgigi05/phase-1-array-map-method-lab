const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// use split, slice and join
// split to split each word, slice to join the 
// capitalize letter with the rest of the 
// word and join to join the words to be one sentence again

const titleCased = () => {
  // mapping through the array
  const capitalizeSentence = tutorials.map(function (sentece) {
    // split the sentence into words
    let words = sentece.split(' ');
    // mapp through each word capitalizing the 1st lettern in each word
    words = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join(' ');
  })
  return capitalizeSentence;
}
