// express 모듈을 가져옴
const express = require('express');
// 경로 작성을 쉽게하기위한 path 모듈을 가져옴
const path = require('path');
const app = express();
// 포트번호 할당
const PORT = 3000;

// 탐색기에 위치한 디렉토리를 서버가 접근가능케 함
app.use(express.static(path.join(__dirname, '..')));

// get 메서드를 사용하여 항상 index.html 반환가능케 함
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`START SERVER`);
});