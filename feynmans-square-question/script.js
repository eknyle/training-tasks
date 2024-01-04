/*

Feynman's squares
Richard Phillips Feynman was a well-known American physicist and a recipient of the Nobel Prize in Physics. He worked in theoretical physics and pioneered the field of quantum computing.

Recently, an old farmer found some papers and notes that are believed to have belonged to Feynman. Among notes about mesons and electromagnetism, there was a napkin where he wrote a simple puzzle: "how many different squares are there in a grid of NxN squares?".

For example, when N=2, the answer is 5: the 2x2 square itself, plus the four 1x1 squares in its corners:

Complete the function that solves Feynman's question in general. The input to your function will always be a positive integer.

Examples
1  -->   1
2  -->   5
3  -->  14
(Adapted from the Sphere Online Judge problem SAMER08F by Diego Satoba)

N = n(n + 1)(2n + 1)/6
*/
//Временная сложность: O(n)
function countSquares(n){
    let arraySquares=[1];
    for (let i=1;i<n;i++){
        arraySquares[i]=arraySquares[i-1]+(i+1)*(i+1);
    }
    return arraySquares.pop();
  }
  //Временная сложность: O(1)
  function countSquaresFormula(n){
    //используем формулу для вычисления количества квадратов
    return n*(n+1)*(2*n+1)/6;
  }

  console.log(countSquaresFormula(1));
  console.log(countSquaresFormula(2));
  console.log(countSquaresFormula(5));
  console.log(countSquaresFormula(15));