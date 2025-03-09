//* "시작 하기"버튼요소를 받아와서 startBtn에 담아줌
const startBtn = document.querySelector('button');
//* article태그들을 모두 받아와서 articles에 담아줌
const articles = document.querySelectorAll('article');
//* 시간을 표시하는 article요소를 timeDisplay에 담아줌
const timeDisplay = articles[0];
//* 설명을 표시하는 article요소를 descDisplay에 담아줌 
const descDisplay = articles[1];
//* 게임을 표시하는 article요소를 gameDisplay에 담아줌줌
const gameDisplay = articles[2];
//* clearInterval메서드 사용을 위한 setInterval에 이름을 지어줌
let startTime = 0;
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
  timer.start();
});

/**
 * @method start 0.00초로 타이머 동작을 시작하는 메서드
 * @method close 타이머 동작을 종료하는 메서드
 */
const timer = {
  /**
   * @description 0.00초로 타이머 동작을 시작하는 메서드
   */
  start : function startTimer() {
    let miliSec = 0;
    startTime = setInterval(() => {
      const display = timeDisplay.childNodes[3];
      display.textContent = `${Number(miliSec += 1)/100}`;
    }, 10);
  },
  /**
   * @param {*} timer 타이머 동작 시 만들어진 interval 변수 명
   * @description 타이머 동작을 종료하는 메서드
   */
  close : function closeTimer(timer) {
    clearInterval(timer);
  },
}