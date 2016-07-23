var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));
require("./app/routing/api-routes.js")(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
	console.log('Listening on PORT ' + PORT);
});