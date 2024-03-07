const body=document.querySelector('body');
const container= document.querySelector('.container');


for(let i=0;i<16*16;i++){
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
}

body.appendChild(container);

function changeColor(square){
   square.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
}

const squares= document.querySelectorAll('.square');
squares.forEach(square=>{
   square.addEventListener("mouseover",()=>{
      changeColor(square);});
})

let number=16;
const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   number= document.querySelector(".number").value;
});

