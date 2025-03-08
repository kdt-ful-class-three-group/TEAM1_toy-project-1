const startBtn = document.querySelector('button');

startBtn.addEventListener('click', () => {
  const articles = document.querySelectorAll('article');
  const descDisplay = articles[1];
  const gameDisplay = articles[2];
  
  descDisplay.style.display = 'none';
  gameDisplay.classList.replace('d-none', 'd-grid');

  for(let i=0; i<374; i++) {
    const div = document.createElement('div');
    div.classList.add('w-1rem', 'h-1rem', 'border-1px-dark');
    gameDisplay.append(div);
  }
});