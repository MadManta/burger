var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b4b56f91f784bc",
    password: "db8ab2fe",
    database: "heroku_19ea29ec73b1ef5"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as ID " + connection.threadId);
});

module.exports = connection;

heroku_19ea29ec73b1ef5