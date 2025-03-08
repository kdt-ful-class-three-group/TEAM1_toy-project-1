import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log("접속");
})

app.listen(3000, () => {
  console.log(`서버 실행 중.. (http://localhost:3000)`);
})