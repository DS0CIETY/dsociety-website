'use strict';

// Theme toggle
document.querySelector('#theme-checkbox').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

const modalJoinWrapper = document.querySelector('.join-modal-wrapper');
const responseModal = document.querySelector('.response-modal');
const responseTitle = document.querySelector('.response-modal__title');

const closeJoinModal = () => modalJoinWrapper.classList.add('hide');
const closeResponseModal = () => responseModal.classList.add('hide');
const openJoinModal = () => modalJoinWrapper.classList.remove('hide');
const openResponseModal = () => responseModal.classList.remove('hide');

// Modal open
document.querySelector('.intro__btn-join').addEventListener('click', openJoinModal);

// Modal close
document.querySelector('.join-modal__close').addEventListener('click', closeJoinModal);
document.querySelector('.response-modal__close').addEventListener('click', closeResponseModal);

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeJoinModal();
    closeResponseModal();
  }
});

// Send form
const form = document.querySelector('.join-modal__form');
const usernameInput = document.querySelector('.join-modal__input_username');
const usertextInput = document.querySelector('.join-modal__input_usertext');

usernameInput.addEventListener('change', () => {
  usernameInput.classList.remove('error');
});

usertextInput.addEventListener('change', () => {
  usertextInput.classList.remove('error');
});

form.onsubmit = async (event) => {
  event.preventDefault();

  const userNameIsOk = usernameInput.value.match(/@[A-Za-z]+/);
  const userTextIsOk = usertextInput.value.match(/[A-Za-zА-Яа-я]+/);

  !userNameIsOk && usernameInput.classList.add('error');
  !userTextIsOk && usertextInput.classList.add('error');

  if (userNameIsOk && userTextIsOk) {
    const requestText = `<b>🤖 User:</b> ${usernameInput.value} | <b>💬 Request:</b> ${usertextInput.value}`;
    const botRequest = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&parse_mode=html&text=${requestText}`;

    fetch(botRequest, {
      method: 'POST',
    })
      .then(() => {
        responseTitle.textContent = 'Thanks! Your message sent.';
        closeJoinModal();
        responseModal.classList.remove('hide');
        usernameInput.value = '';
        usertextInput.value = '';
        usernameInput.classList.remove('error');
        usertextInput.classList.remove('error');
      })
      .catch(() => {
        responseTitle.textContent = 'Something happened. Try one more time or contact via social links.';
        closeJoinModal();
        responseModal.classList.remove('hide');
      });
  }
};

document.querySelector('.footer__date').textContent = new Date().getFullYear();
