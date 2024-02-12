// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


function countSmileys(arr) {
    let count = 0;
    let eyes = [':', ';']
    let noses = ['-', '~']
    let mouths = [')', 'D']
    arr.forEach((face) => {
      if(face.length === 2){
        if(eyes.includes(face[0]) && mouths.includes(face[1])){
          count++
        }
      }else if(face.length === 3){
        if(eyes.includes(face[0]) && noses.includes(face[1]) && mouths.includes(face[2])){
          count++
        }
      }
    })
    return count;
  }