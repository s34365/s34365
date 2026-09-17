const modal = document.querySelector('#image-modal');
const modalImage = modal.querySelector('img');
const modalCaption = modal.querySelector('figcaption');
const closeButton = modal.querySelector('.modal-close');

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.activity-photo').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.fullImage;
    modalImage.alt = button.dataset.caption;
    modalCaption.textContent = button.dataset.caption;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  });
});

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
