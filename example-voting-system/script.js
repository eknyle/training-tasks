window.onload = function () {
  const myArray = ["Laurence", "Mike", "John", "Larry"];

  const button=document.querySelector('#addNew');
  const inputAddFriend=document.querySelector('#addFriend');
  
  const output=document.querySelector('#output');
  
  button.addEventListener('click',function(){
    const value=inputAddFriend.value;
    if (!value) return;
    myArray.push(value)
    addItem(value,myArray.length,0);
    inputAddFriend.value='';
  });
  
    myArray.forEach((item,index)=>{
      addItem(item,index+1,0);
    });
}
 
function increaseCount(tr){
  tr.lastChild.innerText=Number(tr.lastChild.innerText)+1;
}

function addItem(name,index,count){
  const tr=document.createElement('tr');
  const tdNumber=document.createElement('td');
  tdNumber.innerText=index;
  tr.append(tdNumber);
  const tdName=document.createElement('td');
  tdName.innerText=name;
  tr.append(tdName);
  const tdCount=document.createElement('td');
  tdCount.innerText=count;
  tr.append(tdCount);
  tr.addEventListener('click', function(){
    increaseCount(tr);
  })
  output.append(tr);
}

