// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    let arr = string.split(' ');
    let cased = arr.map(word => word.split('').map((char, idx) => {
      if(idx % 2 === 0) return char.toUpperCase();
      else return char.toLowerCase();
    }))
    return cased.map(wordArr => wordArr.join('')).join(' ')
    
    
  }