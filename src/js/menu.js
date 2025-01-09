const menuButton = document.getElementById('menu-button');
const modal = document.getElementById('menu-modal');
const closeModal = document.getElementById('close-modal');

menuButton.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
