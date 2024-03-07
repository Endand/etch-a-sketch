const body=document.querySelector('body');
const container= document.querySelector('.container');


const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const inputField = document.querySelector(".number");
   let number = inputField.value;
   if(number>=1 && number <=100){
      createDim(number)
   }else{
      alert('Please enter a number between 1 and 100!');
      inputField.value='';
      inputField.focus();
   }
   
});

function createDim(number){
   /*Resets container and make a new one every time dimension changes */
   container.innerHTML = '';

   /*Makes new divs based on the dimension given */
   for(let i=0;i<number*number;i++){
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
   }

   /*Arrange the divs to be n x n fashion */
   const dim=50/number;
   const squares= document.querySelectorAll('.square');
   squares.forEach(square => {
      square.style.height=`${dim}vw`;
      square.style.width=`${dim}vw`;
   
      /*Makes squares change color on mouse hover */
      square.addEventListener("mouseover",()=>{
         changeColor(square);});
   }); 
   
}

body.appendChild(container);


function changeColor(square){
   square.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
}




