'use strict';

document.getElementById('title').style.color = '#5c2bbe';
const newEl = document.createElement('h2');

newEl.style.textAlign = 'center';



const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const surnameEl = document.getElementById('surname');
const mobileEl = document.getElementById('mobile');
const passwordEl      = document.getElementById('new-password');
const  confirmEl   = document.getElementById('confirm-password');

formEl.addEventListener("submit",(e) => {
  e.preventDefault();
  if(usernameEl.value=== ''){
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add('error');
  }else{
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add('success');
  }
  if(surnameEl.value=== ''){
    const formControlEl = surnameEl.parentElement;
    formControlEl.classList.add('error');
  }else{
    const formControlEl = surnameEl.parentElement;
    formControlEl.classList.add('success');
  }
  if(mobileEl.value=== ''){
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add('error');
  }else{
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add('success');
  }
  if(passwordEl.value=== ''){
    const formControlEl = passwordEl.parentElement;
    formControlEl.classList.add('error');
  }else{
    const formControlEl = passwordEl.parentElement;
    formControlEl.classList.add('success');
  }
  if(confirmEl.value=== ''){
    const formControlEl = confirmEl.parentElement;
    formControlEl.classList.add('error');
  }else{
    const formControlEl = confirmEl.parentElement;
    formControlEl.classList.add('success');
  }

});
