

const btnOpenModal = document.querySelector('.btn-open-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const modelWindow = document.querySelector('.modal');


 btnOpenModal.addEventListener('click',()=>{
    
      modelWindow.classList.remove('close');
      modelWindow.classList.add('open');
 });


 btnCloseModal.addEventListener('click',()=>{
    modelWindow.classList.remove('open');
    modelWindow.classList.add('close')
 })
 
document.addEventListener ('keydown', (event)=>{

   console.log(event )
   if(event.key==='escape'){
      modelWindow.classList.remove('open');
    modelWindow.classList.add('close')
   }
})