const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('hi')
});

// Start the server
app.listen(3034, () => {
  console.log('server connected');
});