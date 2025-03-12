/**
 * @param {number} userPosition 사용자 위치 값
 * @param {KeyboardkeyButton} keyButton 사용자가 눌른 키 값
 * @returns {number} 사용자의 현재 위치 값
 * @description 사용자가 입력한 키를 이용해서 "좌" 혹은 "우" 로 이동한다.
 */
function moveCharater(userPosition, keyButton) {
  const articles = document.querySelectorAll('article');
  const gameDisplay = articles[2];
  // * 만일 눌리는 키가 오른쪽 화살표라면
  if (keyButton === 'ArrowRight' || keyButton === 'd') {
    // * userPosition + 1의 범위를 374 보다 적게 지정해준다. => 여기서 374는 div의 총 갯수를 의미한다. 
    // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
    if (userPosition + 1 < 374) {
      // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
      gameDisplay.querySelectorAll('div')[userPosition].classList.remove('bg-green');
      // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
      gameDisplay.querySelectorAll('div')[userPosition + 1].classList.add('bg-green');
      // * userPosition는 점점 증가한다.
      userPosition++
    }
  }
  // * 만일 눌리는 키가 왼쪽 화살표라면
  else if (keyButton === 'ArrowLeft' || keyButton === 'a') {
    // * userPosition - 1의 범위를 356 보다 크게 지정해준다. => 여기서 356는 div의 마지막 줄에서 두번째, 마지막 칸의 순서이다. 
    // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
    if (userPosition - 1 > 356) {
      // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
      gameDisplay.querySelectorAll('div')[userPosition].classList.remove('bg-green');
      // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
      gameDisplay.querySelectorAll('div')[userPosition - 1].classList.add('bg-green');
      // * userPosition는 점점 감소한다.
      userPosition--
    }
  }

  return userPosition;
}

export { moveCharater }