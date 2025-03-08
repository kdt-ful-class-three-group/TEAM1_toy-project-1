const startBtn = document.querySelector('button');

startBtn.addEventListener('click', () => {
  const articles = document.querySelectorAll('article');
  const descDisplay = articles[1];
  const gameDisplay = articles[2];
  
  descDisplay.style.display = 'none';
  gameDisplay.classList.replace('d-none', 'd-grid');
});