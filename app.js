import express from 'express';
import path from 'path'

//? CommonJS를 사용하면 __dirname을 사용할 수 있다.
//? package.json에 type:module을 추가할 경우 ES module이기 때문에 __dirname을 사용하게 된다면 에러가 발생한다.
//* 현재 폴더의 경로를 받아와 __dirname에 담았다. 
const __dirname = path.resolve();
const app = express();

//* index파일을 불러올 때 필요한 파일을 참조한다.
app.use('/public', express.static('public'));

//* / 요청이 들어올 경우 index화면을 표시한다.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

//* 서버 구동 
app.listen(3000, () => {
  console.log(`서버 실행 중.. (http://localhost:3000)`);
})