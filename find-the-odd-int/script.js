/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

##goodCodeSample
{
var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
*/

function  findOdd(A) { 
    const map=new Map();
    A.forEach( (item)=>{
        if (map.has(item)){
            map.set(item, map.get(item) + 1);
        }else{
            map.set(item,1);
        }
    }  
    );  
    return [...map.entries()].filter(entry=>entry[1] % 2!=0)[0][0];
  }

