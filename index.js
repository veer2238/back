const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('hibhhb')
});

// Start the server
app.listen(3034, () => {
  console.log('server connected');
});