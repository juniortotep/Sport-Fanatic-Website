var express = require("express");

var app = express();
var axios = require('axios');
var cors = require('cors');
app.use(cors());

app.get("/rankings", async function (req, res) {
  const data = await axios.get('http://api.sportradar.us/mma/trial/v2/en/rankings.json?api_key=w9pxw25ns8rm9waq8ecb4gnf');
  return res.json(data.data);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
