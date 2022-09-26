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

const inputElArray = [
  usernameEl,
  surnameEl,
  mobileEl,
  passwordEl,
  confirmEl
];

const showError = function(el,message){
  const formControlEl = el.parentElement;
  formControlEl.className = 'form-control error';
  const smallEl = formControlEl.querySelector('small');
  smallEl.textContent = message;
};
const showSuccess = function(el){
  const formControlEl = el.parentElement;
    formControlEl.className = 'form-control success ' ;
  };


const checkRequired = function (arr) {
  for(const el of arr){
    if(el.value === ''){
      showError(el,`${el.name} is required` );
  }else{
    showSuccess(el);
  }
    }
  };
  
  

  const checkLength = function (el,min,max){
    if(el.value.length < min){
      showError(el,`${el.name} should have ${min} characters`);
    } else if (el.value.length  >  max){
      showError(el,`${el.name} should not be more than ${max} characters`);
  }
  else{
    showSuccess(el);
  }
  };

const passwordMatch = function(elOne,elTwo){
  if(elOne.value=== '' || elTwo.value === ''){
    showError(elOne,'new password is mandatory');
    showError(elTwo,'confirm password is mandatory');
  }
    
  else {
    if(elOne.value===elTwo.value){
      showSuccess(elOne);
      showSuccess(elTwo);
    }else{
    showError(elOne,'passwords do not match');
    showError(elTwo,'passwords do not match');
  }
  }
};

formEl.addEventListener("submit",(e) => {
  e.preventDefault();
  checkRequired(inputElArray);
  
  
  checkLength(usernameEl, 8, 12);
  checkLength(surnameEl, 8, 12);
  checkLength(mobileEl, 10, 10);
  checkLength(passwordEl, 8, 12);
  passwordMatch(passwordEl,confirmEl);
  
});

//   if(usernameEl.value=== ''){
//     const formControlEl = usernameEl.parentElement;
//     formControlEl.classList.add('error');
//   }else{
//     const formControlEl = usernameEl.parentElement;
//     formControlEl.classList.add('success');
//   }
//   if(surnameEl.value=== ''){
//     const formControlEl = surnameEl.parentElement;
//     formControlEl.classList.add('error');
//   }else{
//     const formControlEl = surnameEl.parentElement;
//     formControlEl.classList.add('success');
//   }
//   if(mobileEl.value=== ''){
//     const formControlEl = mobileEl.parentElement;
//     formControlEl.classList.add('error');
//   }else{
//     const formControlEl = mobileEl.parentElement;
//     formControlEl.classList.add('success');
//   }
//   if(passwordEl.value=== ''){
//     const formControlEl = passwordEl.parentElement;
//     formControlEl.classList.add('error');
//   }else{
//     const formControlEl = passwordEl.parentElement;
//     formControlEl.classList.add('success');
//   }
//   if(confirmEl.value=== ''){
//     const formControlEl = confirmEl.parentElement;
//     formControlEl.classList.add('error');
//   }else{
//     const formControlEl = confirmEl.parentElement;
//     formControlEl.classList.add('success');
//   }

 
