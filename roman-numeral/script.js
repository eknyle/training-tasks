/* 
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represen
*/

class RomanNumerals {
  static getRomanDigit(digit) {
    const romanNumerals = new Map();
    romanNumerals.set(1, "I");
    romanNumerals.set(2, "II");
    romanNumerals.set(3, "III");
    romanNumerals.set(4, "IV");
    romanNumerals.set(5, "V");
    romanNumerals.set(6, "VI");
    romanNumerals.set(7, "VII");
    romanNumerals.set(8, "VIII");
    romanNumerals.set(9, "IX");
    romanNumerals.set(10, "X");
    romanNumerals.set(20, "XX");
    romanNumerals.set(30, "XXX");
    romanNumerals.set(40, "XL");
    romanNumerals.set(50, "L");
    romanNumerals.set(60, "LX");
    romanNumerals.set(70, "LXX");
    romanNumerals.set(80, "LXXX");
    romanNumerals.set(90, "XC");

    romanNumerals.set(100, "C");
    romanNumerals.set(200, "CC");
    romanNumerals.set(300, "CCC");
    romanNumerals.set(400, "CD");
    romanNumerals.set(500, "D");
    romanNumerals.set(600, "DC");
    romanNumerals.set(700, "DCC");
    romanNumerals.set(800, "DCCC");
    romanNumerals.set(900, "CM");

    romanNumerals.set(1000, "M");
    romanNumerals.set(2000, "MM");
    romanNumerals.set(3000, "MMM");
    romanNumerals.set(4000, "MMMM");
    return romanNumerals.get(digit);
  }
  static toRoman(num) {
    let result = "";
    let mas = Array.from("" + num);
    let koef=1;
    for (let i = 4; i > 0; i--) {
      let item = mas.pop();
      if (item&&item!=0){

        switch(i){
          case 1:koef=1000;break;
          case 2:koef=100;break;
          case 3:koef=10;break;
          case 4:koef=1;break;
        }
        result = this.getRomanDigit(item * koef) + result;
      }
    }

    return result;
  }

  ///MMMMCCVII  4207
  static fromRoman(str) {
    return 4;
  }
}


console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.toRoman(1));
console.log(RomanNumerals.toRoman(1990));//MCMXC
console.log(RomanNumerals.toRoman(2008)); //MMVIII





/* 
const form=document.createElement('form');
form.setAttribute('target','_blank');
form.setAttribute('action','https://www.w3docs.com/');


const button=document.createElement('button');
button.innerText='Link!';
button.setAttribute('type',"submit");
form.appendChild(button);
document.body.insertBefore(form, null); */

const set=new Set([1,2,3,4,5,6]);
const iterator=set[Symbol.iterator]();
console.log(iterator);
let total=0;
for (const num of iterator){
  console.log(num);
  if (num % 2 === 0){
    total+=num;
  }
}

console.log(total);