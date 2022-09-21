'use strict';
document.getElementById('title').textContent = ' Welcome to this Form';
document.getElementById('title').style.color = '#5c2bbe';
const newEl = document.createElement('h2');
newEl.textContent = 'You can fill  this Form Here';
newEl.style.textAlign = 'center';
newEl.style.marginTop = 1;
document.querySelector('.contain').appendChild(newEl);

const formEl = getElementById('form');
const usernameEl = getElementById('username');
const surnameEl = getElementById('surname');
const mobileEl = getElementById('mobile');
const passwordEl      = getElementById('new-password');
const  confirmEl   = getElementById('confirm-password');

formEl.addEventListener('submit',function () {
  alert('submitted');
});
