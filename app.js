import express from 'express';
import path from 'path';
import fs from 'fs';
import qs from 'querystring';
import { pool } from './DB.js';

//? CommonJS를 사용하면 __dirname을 사용할 수 있다.
//? package.json에 type:module을 추가할 경우 ES module이기 때문에 __dirname을 사용하게 된다면 에러가 발생한다.
//* 현재 폴더의 경로를 받아와 __dirname에 담았다. 
const __dirname = path.resolve();
const app = express();
let jsonData = [];

function gameServer() {
  //* index파일을 불러올 때 필요한 파일을 참조한다.
  app.use('/public', express.static('public'));

  //* / 요청이 들어올 경우 index화면을 표시한다.
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  })

  app.get('/data.json', (req, res) => {
    res.sendFile(__dirname + '/data.json');
  })

  app.post('/data', (req, res) => {
    req.on('data', async (data) => {
      const parseData = qs.parse(data.toString());
      const sql = 'INSERT INTO rain_time (playtime) VALUES ($1)';
      try {
        await pool.query(sql, [parseData.playTime]);
        return res.redirect(302, 'http://localhost:3000/');
      } catch (error) {
        throw error;
      }
    })
  })

  app.get('/rank', async (req, res) => {
    const sql = 'SELECT * FROM rain_time';
    try {
      const result = await pool.query(sql);
      return res.json(result.rows);
    } catch (error) {
      throw error;
    }
  })
};

if (!fs.existsSync('data.json')) {
  fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
  gameServer();
} else {
  gameServer();
}
//* 서버 구동 
app.listen(3000, () => {
  console.log(`서버 실행 중.. (http://localhost:3000)`);
})