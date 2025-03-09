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

  let count = 365;
  // * count라는 변수에 365라는 수를 지정. => 365는 div의 하단 중앙을 뜻함. 
  document.addEventListener('keydown', (event) => {
  // * keydown이라는 동작을 실행했을 때 이벤트의 주체를 document즉 html문서 자체를 주체로 한다.
    if(event.key === 'ArrowRight') {
  // * 만일 눌리는 키가 오른쪽 화살표라면
      if(count + 1 < 374) {
  // * count + 1의 범위를 374 보다 적게 지정해준다. => 여기서 374는 div의 총 갯수를 의미한다. 
  // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
  // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
        gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
  // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
        count++}
  // * count는 점점 증가한다.
      } else if(event.key === 'ArrowLeft') {
  // * 만일 눌리는 키가 왼쪽 화살표라면
        if(count - 1 > 356) {
  // * count - 1의 범위를 356 보다 크게 지정해준다. => 여기서 356는 div의 마지막 줄에서 두번째, 마지막 칸의 순서이다. 
  // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
  // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
          gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
  // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
          count--}
  // * count는 점점 감소한다.
      } else if(event.key === 'd') {
  // * 만일 눌리는 키가 d라면
        if(count + 1 < 374) {
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
          gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
          count++}
      } else if(event.key === 'a') {
  // * 만일 눌리는 키가 a라면
        if(count - 1 > 356) {
          gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
          gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
          count--}
      } 
  });
});