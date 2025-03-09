//* "시작 하기"버튼요소를 받아와서 startBtn에 담아줌
const startBtn = document.querySelector('button');
//* article태그들을 모두 받아와서 articles에 담아줌
const articles = document.querySelectorAll('article');
//* 설명을 표시하는 article요소를 descDisplay에 담아줌 
const descDisplay = articles[1];
//* 게임을 표시하는 article요소를 gameDisplay에 담아줌줌
const gameDisplay = articles[2];

/**
 * @description 게임표시 부분에 격자로 div요소 추가하는 함수
 * @description 새로운 div요소를 만들고 해당 div요소에 클래스를 추가하며 div요소를 게임 표시 부분에 추가한다.
 */
function makeGrid() {
  for(let i=0; i<374; i++) {
    const div = document.createElement('div');
    div.classList.add('w-1rem', 'h-1rem', 'border-1px-dark');
    gameDisplay.append(div);
  }
}

//* 시작 버튼 클릭시 이벤트가 발생한다.
startBtn.addEventListener('click', () => {
  //* 설명표시 article부분 display none으로 설정
  descDisplay.style.display = 'none';
  //* 게임표시 article부분의 display none의 스타일을 grid 스타일로 변경한다.
  gameDisplay.classList.replace('d-none', 'd-grid');
  makeGrid();
  const player = gameDisplay.querySelectorAll('div');
  // * gameDisplay안의 div들을 전부 불러와서, player에 담아줌.
  player[365].classList.add('bg-green');
  // * 366번째 div가 중앙 하단에 배치 되므로 초기에 시작 버튼 클릭시 화면이 표시될 때, 중앙 하단의 div가 초록색으로 표시되게 한다.

  let count = 365
  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
      if(count + 1 < 374) {
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
        gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
        count++}
      } else if(event.key === 'ArrowLeft') {
        if(count - 1 > 356) {
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
          gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
          count--}
      } else if(event.key === 'd') {
        if(count + 1 < 374) {
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
          gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
          count++}
      } else if(event.key === 'a') {
        if(count - 1 > 356) {
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
          gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
          count--}
      } 
  });
});