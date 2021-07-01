// run `node index.js` in the terminal
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`new app running on port ${port}`);
});

console.log(`Hello Node.js v${process.versions.node}!`);

// app.listen(port, () => {
//   console.log(`new app running on port ${port}`);
// });
