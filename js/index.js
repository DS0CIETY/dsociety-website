'use strict';

// Theme toggle

document.querySelector('#theme-checkbox').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Join button

document.querySelector('.intro__btn-join').addEventListener('click', () => {
  document.querySelector('.join-modal-wrapper').classList.remove('hide');
});

document.querySelector('.footer__date').textContent = new Date().getFullYear();
