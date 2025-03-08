import express from 'express';
import path from 'path'

const __dirname = path.resolve();
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, () => {
  console.log(`서버 실행 중.. (http://localhost:3000)`);
})