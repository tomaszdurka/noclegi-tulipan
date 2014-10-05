var express = require('express');
var port = process.env.PORT | 3000;
var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function(req, res) {
  return res.render('index');
});

app.listen(port);

console.log('Listening on port ' + port);
