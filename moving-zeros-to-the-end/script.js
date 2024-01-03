/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
function moveZeros(arr) {
    let i=0;
    let length=arr.length;
    while (i<length){
        if (arr[i].toString()==='0'){
            const removed=arr.splice(i,1);
            length--;
            arr.push(removed[0]);
        }
        i++;
    }
    return arr;
}
  console.log( moveZeros([1,2,0,1,0,1,0,3,0,1]));