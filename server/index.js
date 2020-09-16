const express = require('express');
const app = express();

// 静态资源
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('吕肥肥的小时光');
});

app.listen(3000, () => {
  console.log('吕肥肥的小时光启动了');
});