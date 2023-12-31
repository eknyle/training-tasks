/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

##goodCodeSample
{
    for(var i in s) {
        if(s.match(new RegExp(s[i],"gi")).length === 1) {
          return s[i];
        }
      }
      return '';
}
*/

function firstNonRepeatingLetter(s) {    
    if  (s.length<1)
        return '';
    const map=new Map();
    for ( let i=0;i<s.length;i++ ) {
        const lower=map.has(s[i].toLowerCase());
        const upper=map.has(s[i].toUpperCase());
        if (lower||upper){
            map.set(lower?s[i].toLowerCase():s[i].toUpperCase(), 1);
        }else{
            map.set(s[i],0);
        }
    }
    const min =  [...map.entries()].filter(entry => entry[1] === 0);
    return min.length>0? Array.from(min)[0][0] :'';
  }
