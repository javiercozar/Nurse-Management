const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/dist/nurse-shift-management'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/nurse-shift-management/index.html'));
});


app.listen(process.env.PORT || 3000);
