const flipBtn = document.querySelector('.flip-button');
const card = document.querySelector('.card');

flipBtn.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});
