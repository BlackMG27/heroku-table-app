var path = require('path');

//sends the page routing to server.js
module.exports = function (app) {
    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/make.html'));
    });

    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/view.html'));
    });

    //makes sure that the other pages goes through 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}