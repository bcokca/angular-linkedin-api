// The main application script, ties everything together.
var express = require('express');
var app = module.exports = express();

//configure express app
app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

//set the route for the static content
app.use(express.static(__dirname + '/example-usage'));
//start the server on the port
app.listen(process.env.PORT || 8080);
console.log("Express server listening on port %d", process.env.PORT || 8080);
