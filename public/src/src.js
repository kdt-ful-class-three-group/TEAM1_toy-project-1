import { gameOver } from "./modules/gameOver.js";
import { makeForm } from "./modules/makeForm.js";
import { makeGrid } from "./modules/makeGrid.js";
import { printRank } from "./modules/printRank.js";

//* button태그들을 모두 받아와서 buttons에 담아줌
const buttons = document.querySelectorAll('button');
//* "시작 하기"버튼요소를 받아와서 startBtn에 담아줌
const startBtn = buttons[0];
//* "다시하기" 버튼 요소를 받아와서 resetBtn에 담아줌
const resetBtn = buttons[1];
//* article태그들을 모두 받아와서 articles에 담아줌
const articles = document.querySelectorAll('article');
//* 시간을 표시하는 article요소를 timeDisplay에 담아줌
const timeDisplay = articles[0];
//* 설명을 표시하는 article요소를 descDisplay에 담아줌 
const descDisplay = articles[1];
//* 게임을 표시하는 article요소를 gameDisplay에 담아줌
const gameDisplay = articles[2];
//* 게임이 끝났을 때 표시되는 article요소를 gameOverDisplay에 담아줌
const gameOverDisplay = articles[3];
//* 랭크를 표시하는 article요소를 rankDisplay에 담아줌
const rankDisplay = document.querySelector('figure');
// * 왼쪽 이동 버튼
const leftBtn = buttons[2];
// * 오른쪽 이동 버튼
const rightBtn = buttons[3];

let startTime = 0;
let cloudTime = 0;
//* count의 값을 받아온다. 사용자의 위치를 알기 위함
let userIndex = 365;
//* 피한 개수
let avoidCount = 0;
//* 비의 속도를 조절 speed1 : 생성되는 속도 speed2 : 사라지는 속도
let speed1 = 300;
let speed2 = 280;
//* 빗방울과 사용자가 닿았는지 확인 (true:닿았다./false:닿지 않았다.)
let isBump = false;

const form = document.createElement('form');
const input = document.createElement('input');



//* 다시하기 버튼 클릭시 발생하는 이벤트로 클릭시 초 데이터 보내준다.
resetBtn.addEventListener('click', () => {
  let timeScore = timeDisplay.childNodes[3].textContent;
  makeForm(gameOverDisplay, timeScore, form, input);
});

//* 시작 버튼 클릭시 이벤트가 발생한다.
startBtn.addEventListener('click', () => {
  //* 설명표시 article부분 display none으로 설정
  descDisplay.style.display = 'none';
  //* 게임표시 article부분의 display none의 스타일을 grid 스타일로 변경한다.
  gameDisplay.classList.replace('d-none', 'd-grid');
  makeGrid(gameDisplay);
  // * gameDisplay안의 div들을 전부 불러와서, player에 담아줌.
  const player = gameDisplay.querySelectorAll('div');
  // * 366번째 div가 중앙 하단에 배치 되므로 초기에 시작 버튼 클릭시 화면이 표시될 때, 중앙 하단의 div가 초록색으로 표시되게 한다.
  player[365].classList.add('bg-green');

  // * count라는 변수에 365라는 수를 지정. => 365는 div의 하단 중앙을 뜻함. 
  let count = 365;

  // * gameOver라는 변수에 10초뒤에 게임화면은 가려지고, 게임오버 화면이 나타나는 코드를 담음.
  let timeOver = setTimeout(() => {
    gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
  }, 10000);

  // * keydown이라는 동작을 실행했을 때 이벤트의 주체를 document즉 html문서 자체를 주체로 한다.
  document.addEventListener('keydown', (event) => {
    // * 키보드 이벤트가 발생하면, gameOver가 초기화 되고,
    clearTimeout(timeOver);
    // * 만일 눌리는 키가 오른쪽 화살표라면
    if (event.key === 'ArrowRight' || event.key === 'd') {
      // * count + 1의 범위를 374 보다 적게 지정해준다. => 여기서 374는 div의 총 갯수를 의미한다. 
      // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
      if (count + 1 < 374) {
        //* 사용자가 이동했을 때 해당 위치가 회색일 경우 비가 있다고 판단함으로 게임 오버된다.
        if (gameDisplay.querySelectorAll('div')[count + 1].classList.contains('bg-gray')) {
          clearTimeout(timeOver);
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }
        // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
        // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
        gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
        // * count는 점점 증가한다.
        count++
        // * timeOver라는 변수에 다시 10초뒤에 게임오버화면이 뜨는 코드를 담음.
        timeOver = setTimeout(() => {
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }, 10000);
      }
    }

    // * 만일 눌리는 키가 왼쪽 화살표라면
    else if (event.key === 'ArrowLeft' || event.key === 'a') {
      // * count - 1의 범위를 356 보다 크게 지정해준다. => 여기서 356는 div의 마지막 줄에서 두번째, 마지막 칸의 순서이다. 
      // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
      if (count - 1 > 356) {
        //* 사용자가 이동했을 때 해당 위치가 회색일 경우 비가 있다고 판단함으로 게임 오버된다.
        if (gameDisplay.querySelectorAll('div')[count - 1].classList.contains('bg-gray')) {
          clearTimeout(timeOver);
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }
        // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
        // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
        gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
        // * count는 점점 감소한다.
        count--
        // * timeOver라는 변수에 다시 10초뒤에 게임오버화면이 뜨는 코드를 담음.
        timeOver = setTimeout(() => {
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }, 10000);
      }
    }
    //* 사용자가 움직일 때마다 userIndex에 현재 사용자의 위치를 담아준다.
    userIndex = count;
  });

  leftBtn.addEventListener('click', () => {
    clearTimeout(timeOver);
      // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
      if (count - 1 > 356) {
        //* 사용자가 이동했을 때 해당 위치가 회색일 경우 비가 있다고 판단함으로 게임 오버된다.
        if (gameDisplay.querySelectorAll('div')[count - 1].classList.contains('bg-gray')) {
          clearTimeout(timeOver);
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }
        // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
        // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
        gameDisplay.querySelectorAll('div')[count - 1].classList.add('bg-green');
        // * count는 점점 감소한다.
        count--
        // * timeOver라는 변수에 다시 10초뒤에 게임오버화면이 뜨는 코드를 담음.
        timeOver = setTimeout(() => {
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
       }, 10000);
     }
    userIndex = count;
  });

  rightBtn.addEventListener('click', () => {
    clearTimeout(timeOver);
      // * count + 1의 범위를 374 보다 적게 지정해준다. => 여기서 374는 div의 총 갯수를 의미한다. 
      // * 이벤트 범위가 div바깥으로 나가지 않게 조절.
      if (count + 1 < 374) {
        //* 사용자가 이동했을 때 해당 위치가 회색일 경우 비가 있다고 판단함으로 게임 오버된다.
        if (gameDisplay.querySelectorAll('div')[count + 1].classList.contains('bg-gray')) {
          clearTimeout(timeOver);
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }
        // * 앞서 player로 지정해서 bg-green을 class로 넣어둔 div의 클래스를 remove하고,
        gameDisplay.querySelectorAll('div')[count].classList.remove('bg-green');
        // * 그 다음 순서의 div에 bg-green 클래스를 add한다.
        gameDisplay.querySelectorAll('div')[count + 1].classList.add('bg-green');
        // * count는 점점 증가한다.
        count++
        // * timeOver라는 변수에 다시 10초뒤에 게임오버화면이 뜨는 코드를 담음.
        timeOver = setTimeout(() => {
          gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
        }, 10000);
      }
    userIndex = count;
  })

  timer.start();
  timer.cloud();
});

//* 서버에 data.json파일을 요청
const xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.send();
xhr.addEventListener('load', () => {
  let playTimeObj = '';
  let playTimeArr = [];

  if(xhr.responseText === '') {
    playTimeArr.push('0.00');
    playTimeArr.push('0.00');
    playTimeArr.push('0.00');
  } else {
    playTimeObj = JSON.parse(xhr.responseText);

    playTimeObj.forEach((time) => {
      playTimeArr.push(Object.values(time));
    });
  
    playTimeArr.sort((a, b) => {
      return b - a;
    })
  }
  printRank(playTimeArr, rankDisplay);
});

/**
 * @method start 0.00초로 타이머 동작을 시작하는 메서드
 * @method close 타이머 동작을 종료하는 메서드
 * @method cloud 비구름 동작 메서드
 * @method rain 빗방울 생성 메서드
 */
const timer = {
  /**
   * @description 0.00초로 타이머 동작
   */
  start: function () {
    let miliSec = 0;
    startTime = setInterval(() => {
      const display = timeDisplay.childNodes[3];
      display.textContent = `${Number(miliSec += 1) / 100}`;
    }, 10);
  },
  /**
   * @param {*} timer 타이머 동작 시 만들어진 interval 변수 명
   * @description 타이머 동작 종료
   */
  close: function (timer) {
    clearInterval(timer);
  },
  /**
   * @description 비구름 생성
   */
  cloud: function () {
    let rainCloud = 0;
    cloudTime = setInterval(() => {
      rainCloud = Math.floor(Math.random() * 17);
      gameDisplay.childNodes[rainCloud].classList.add('bg-gray');
      setTimeout(() => {
        gameDisplay.childNodes[rainCloud].classList.remove('bg-gray');
      }, 130);
      timer.rain(rainCloud);
    }, 150);
  },
  /**
   * @param {*} rainCloudIndex 비구름 번호
   * @description 비구름을 기준으로 빗방울 생성
   */
  rain: function (rainCloudIndex) {
    let rainIndex = rainCloudIndex;
    setInterval(() => {
      rainIndex += 17;
      if (rainIndex < 374) {
        gameDisplay.childNodes[rainIndex].classList.add('bg-gray');
        if (rainIndex < 374 && rainIndex > 356) {
          if (rainIndex === userIndex) {
            gameOver(timeDisplay, timer, startTime, cloudTime, gameOverDisplay, gameDisplay, avoidCount);
            isBump = true;
          } else if (!isBump) {
            avoidCount++;
          }
        }
        setTimeout(() => {
          gameDisplay.childNodes[rainIndex].classList.remove('bg-gray');
        }, speed2);
      }
    }, speed1);
  },
}
