'use strict';

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var burger = document.querySelector('.burger');

var closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', handlerIconClose);

function handlerIconClose() {
  onCloseModal();
}

burger.addEventListener('click', handlerClick);

function handlerClick() {
  backdrop.classList.remove('is-hidden');
  backdrop.addEventListener('click', handlerBackDrop);
  window.addEventListener('keydown', handlerKeyDown);
}

function handlerBackDrop(evt) {
  if (evt.target === evt.currentTarget) {
    onCloseModal();
  }
}

function handlerKeyDown(evt) {
  if (evt.keyCode === 27) {
    onCloseModal();
  }
}

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  backdrop.removeEventListener('click', handlerBackDrop);
  window.removeEventListener('keydown', handlerKeyDown);
}