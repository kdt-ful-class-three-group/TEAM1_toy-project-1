/**
 * @param {*} rainPosition 현재 빗방울의 위치 값
 * @param {*} userPosition 현재 사용자의 위치 값
 * @description 빗방울이 사용자와 닿으면 게임 오버 화면을 표시 해준다.
*/

function bumpCheck(rainPosition, userPosition) {
  if (rainPosition < 374 && rainPosition > 356) {
    if (rainPosition === userPosition) {
        return true;
    }
  }
}

// * bumpCheck 기존 코드 백업용
// function bumpCheck(rainPosition, userPosition, timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount, isBump) {
//   if (rainPosition < 374 && rainPosition > 356) {
//     if (rainPosition === userPosition) {
//       let timeScore = timeDisplay.childNodes[3].textContent;
//       timer.close(startTime);
//       timer.close(cloudTime);
//       gameDisplay.classList.replace('d-grid', 'd-none');
//       gameOverDisplay.classList.replace('d-none', 'd-flex');
//       gameOverDisplay.childNodes[1].childNodes[3].textContent = `${timeScore} 초`;
//       gameOverDisplay.childNodes[3].childNodes[3].textContent = `${avoidCount} 개`;
//       isBump = true;
//     } else if (!isBump) {
//       avoidCount++;
//     }
//   }
// }


export { bumpCheck };