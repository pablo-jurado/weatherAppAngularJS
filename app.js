    var express  = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.urlencoded({extended: false}))
    // app.use(bodyParser.json())

    app.listen(8080);
    console.log("App listening on port 8080");
