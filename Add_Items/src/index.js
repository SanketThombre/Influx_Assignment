 
const express = require('express');

const items = require("./db.json");

const app = express();

app.post('/items', (req, res) => {
    return res.send({ items : items });
});


app.listen(3000, async() => {
  console.log('Server is running on port 3000');
});