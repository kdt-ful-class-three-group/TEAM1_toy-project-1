  // * NoInput이라는 함수에 10초간 입력이 없을경우 실행 될 코드를 지정한다.

function gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount) {
  let timeScore = timeDisplay.childNodes[3].textContent;
  timer.close(startTime);
  timer.close(cloudTime);
  gameOverDisplay.classList.replace('d-none', 'd-flex');
  gameDisplay.classList.replace('d-grid', 'd-none');
  gameOverDisplay.childNodes[1].childNodes[3].textContent = `${timeScore} 초`;
  gameOverDisplay.childNodes[3].childNodes[3].textContent = `${avoidCount} 개`;
}

export { gameOver };