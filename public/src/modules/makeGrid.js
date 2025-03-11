/**
 * @description 게임표시 부분에 격자로 div요소 추가하는 함수
 * @description 새로운 div요소를 만들고 해당 div요소에 클래스를 추가하며 div요소를 게임 표시 부분에 추가한다.
 */
function makeGrid(gameDisplay) {
  for (let i = 0; i < 374; i++) {
    const div = document.createElement('div');
    div.classList.add('w-1rem', 'h-1rem');
    gameDisplay.append(div);
  }
}

export { makeGrid };