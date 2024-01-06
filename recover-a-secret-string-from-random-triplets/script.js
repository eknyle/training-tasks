/*
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.


#goodCodeSample

var recoverSecret = function(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}


*/


var recoverSecret = function(triplets) {
  let recoverString=[];
  for (let i=0;i<triplets.length;i++){
    if (recoverString.length===0){
      recoverString=recoverString.concat(triplets[i])
     }else{
      let index1=recoverString.indexOf(triplets[i][0]);
      if (index1<0) {
        recoverString.splice(0,0,triplets[i][0]);
      }else{
        let index2=recoverString.indexOf(triplets[i][1]);
        if (index2<0){
          recoverString.splice(index1+1,0,triplets[i][1]);
        } else if (index2<index1){          
          recoverString.splice(index1+1,0,triplets[i][1]);
          recoverString.splice(index2,1);
        }
        index2=recoverString.indexOf(triplets[i][1]);
        let index3=recoverString.indexOf(triplets[i][2]);
        if (index3<0){
          recoverString.splice(index2+1,0,triplets[i][2]);
        } else if (index3<index2){          
          recoverString.splice(index2+1,0,triplets[i][2]);
          recoverString.splice(index3,1);
        }
      }
      index1=recoverString.indexOf(triplets[i][0]);
      let index2=recoverString.indexOf(triplets[i][1]);
      if (index2<0){
        recoverString.splice(index1+1,0,triplets[i][1]);
      }
      index2=recoverString.indexOf(triplets[i][1]);
      let index3=recoverString.indexOf(triplets[i][2]);
      if (index3<0){
        recoverString.splice(index2+1,0,triplets[i][2]);
      }

     }
  }
  return recoverString.join('');
}



console.log(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
));