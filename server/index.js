const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db.js');

app.use(express.json());
app.use(express.static('client/dist'));

app.get('/', function(req, res) {

})

app.post('/', function(req, res) {

})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})