// App.js

/*
    SETUP
*/
var express = require("express");
var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: "main"});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 3129);
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
  res.render('home.handlebars') 
});

app.get('/locations',function(req,res){
  res.render('locations.handlebars') 
});


app.listen(app.get('port'), function(){
	console.log('Express started on port ' + app.get('port') + '; press Ctrl-C to terminate.');
});