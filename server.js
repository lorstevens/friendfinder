var express= require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port =   process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});