
window.onload=function () {
  let titleArray=document.querySelectorAll(".title");
let myTextArray=document.querySelectorAll(".myText");

titleArray.forEach((el) => {
  el.addEventListener("click", (e) => {
      remover();
      el.nextElementSibling.classList.toggle("active");
  })
})

function remover() {
  myTextArray.forEach((el) => {
      el.classList.remove("active");
  })
}

}

