/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

##goodCodeSample
{
   var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/

function  count(string) {    

    if  (string.length<1)
        return {};
    const map=new Map();
    for ( let i=0;i<string.length;i++ ) {
        if (map.has(string[i])){
            map.set(string[i], map.get(string[i]) + 1);
        }else{
            map.set(string[i],1);
        }
    }    
    return Object.fromEntries(map);

  }
