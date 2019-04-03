let tableData = require('../data/tableData');
let waitList = require('../data/waitListData');

module.exports = function (app) {
    //----------make the data routes-------

    // Displays all reservations
    app.get("/api/reserve", function (req, res) {
        return res.json(tableData);
    });

    // Displays all tables on waitlist
    app.get("/api/tables", function (req, res) {
        return res.json(waitList);
    });

    app.post("/api/tables", function (req, res) {
        let newTable = req.body;
        console.log(newTable);
        if (tableData.length < 5) {
            tableData.push(newTable);
        } else {
            waitList.push(newTable);
        }

    });

    app.get('/api/reserve', function (req, res) {
        return res.json(waitList);
    });

    app.get('/api/tables', function (req, res) {
        return res.json(tableData);
    });
}