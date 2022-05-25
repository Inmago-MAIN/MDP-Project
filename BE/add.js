const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const { response } = require('express');

const multer = require("multer");
const path = require("path");

var mysql = require('mysql');
const { NULL } = require('mysql/lib/protocol/constants/types');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB',
    dateStrings : "date"
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/html/add.html')
})

app.use((request, response) => {
    const title = request.body.title;
    const msg = request.body.msg;

    if (request.url == '/add') {
        db.query(
                `insert into comtbl(title, msg, posting) values(?,?,now())`, [title, msg],
            )
            // response.writeHead(302, { Location: `/community` });
        response.end();
    }
    // db.query("SELECT * FROM comtbl", function(result, fileds) {
    //     var arr = [fileds[4].title, fileds[4].msg, fileds[4].posting];
    //     console.log(arr[0], arr[1], arr[2]);
    // });

})

app.listen(3000, () => {
    console.log('3000');
});