const fs = require('fs');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const AppDOM = require('./static/output');

const app = express();
const port = 3000;
const htmlPath = './template.html';

var htmlStr = fs.readFileSync(htmlPath, 'utf8');

app.get('/', (req, res) => {
  res.send(htmlStr.replace('${ssr-insert}', ReactDOMServer.renderToString(AppDOM)));
});

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
