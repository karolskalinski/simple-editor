"use strict";

console.log(`Hello world!`);

//webstorage - localstorage


const textArea = document.querySelector('.form__textarea--js');
const save = document.querySelector('.form__button--save--js');
const load = document.querySelector('.form__button--load--js');
const trash = document.querySelector('.form__button--trash--js');


save.addEventListener('click', (e) => {
    e.preventDefault();    
    localStorage.setItem('textArea', textArea.value);

})

load.addEventListener('click', (e) => {
    e.preventDefault();    
   textArea.value = localStorage.getItem('textArea');
})

trash.addEventListener('click', (e) =>{
    e.preventDefault();
    localStorage.removeItem('textArea')
})
