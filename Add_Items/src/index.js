 
const express = require('express');

const items = require("./db.json");

const app = express();

app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(items);
  console.log(res);
});

app.get("", (req, res) => {
  
  return res.send({items:items});
})
app.listen(3000, function () {
  console.log("listening on port 3000");
})