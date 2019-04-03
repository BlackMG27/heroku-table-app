var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8000;

var table = require('./data/tableData');
var waitList = require('./data/waitListData');

//

//---------------MUST USE OR ELSE DATA WILL BE UNDEFINED -----------------//
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//-----------set up the routers ---------// ------------ROUTES------------//

require('./routes/APIRoutes')(app);
require('./routes/HTMLRoutes')(app);

// -------------LISTENER-------------

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});