var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB'
});

connection.connect();

connection.query("create table userTBL (userName varchar(20), pw int, name varchar(20));",
    function(error, results, fields) {
        if (error) console.error(error);
        console.log(results);
    })

connection.end();