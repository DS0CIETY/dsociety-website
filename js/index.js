'use strict';

// Footer date

document.querySelector('.footer__date').textContent = updateDate();

function updateDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // count starts at 0
  const day = date.getDate();

  return `${day} : ${month} : ${year}`;
}
