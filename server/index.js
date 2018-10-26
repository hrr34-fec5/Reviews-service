const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Reviews = require('../database/Reviews.js');
const PORT = 1337;
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reviews', (req, res) => {
  console.log('GET /api/reviews');
  var query = Reviews.find({});
  query.exec((err, data)=> {
    if(err) return console.log(err);
    res.json(data);
  });
});

app.post('/api/reviews', (req, res) => {
  console.log('POST /api/reviews');
//TO-DO
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
