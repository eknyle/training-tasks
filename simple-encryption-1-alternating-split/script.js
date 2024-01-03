/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

##intrestingCodeSample


	for (let i = 0; i < n; i++) {
  	text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
 

	let l = text && text.length / 2 | 0
	for (let i = 0; i < n; i++) {
  	text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
 
}

*/

function encrypt(text, n) {
    if (n<0||!text)
    return text;
    for (let i=0;i<n;i++){
        var oddString="";
        var evenString="";
        [...text].forEach( (item,index,arr)=>{
            index %2 !=0?oddString=oddString.concat(item):evenString=evenString.concat(item);
        });
        text=oddString.concat(evenString);
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (n<0||!encryptedText)
    return encryptedText;
    for (let i=0;i<n;i++){
        let text=[...encryptedText];
        let odd=1;
        let even=0;
        let half=Math.floor(encryptedText.length/2);
     
        for (let j=0;j<half;j++){   
            text[odd]=encryptedText[j];
            text[even]=encryptedText[half+j];
            odd=odd+2;
            even=even+2;
        }
        encryptedText=text.join('');
    }
    return encryptedText;
 
}

