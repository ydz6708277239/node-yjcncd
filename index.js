// run `node index.js` in the terminal
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (rq, rs) => {
  console.log(rq.body);
});
// app.listen(port, () => {
//   console.log(`new app running on port ${port}`);
// });

console.log(`Hellor Node.js v${process.versions.node}!`);

app.listen(port, () => {
  console.log(`new app running on port ${port}`);
});
