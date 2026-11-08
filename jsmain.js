const burger = document.querySelector('.menu-toggle');
const nav = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.menu-clouse');

burger.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

function openMenu() {
  nav.classList.add('is-open');
};

function closeMenu() {
  nav.classList.remove('is-open');
};


const order = document.querySelector('.hero-button');
const modal = document.querySelector('.modal-overlay');
const closeButtonModal = document.querySelector('.link-close');

order.addEventListener('click', openModal);
closeButtonModal.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('is-open');
};

function closeModal() {
  modal.classList.remove('is-open');
};