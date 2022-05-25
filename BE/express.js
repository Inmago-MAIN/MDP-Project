const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const { response } = require('express');

const page = require('./page');

var mysql = require('mysql');
const { NULL } = require('mysql/lib/protocol/constants/types');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB'
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/index`));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/html/login.html')
})

app.get('/sign', (req, res) => {
    res.sendFile(__dirname + '/html/sign.html')
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/html/main.html')
})

app.use((request, response) => {

    if (request.url == '/sign') {
        const userName = request.body.userName;
        const password = request.body.password;
        const name = request.body.name;

        console.log(request.body.department);
        console.log(request.body.class);

        db.query(`
        insert into userTBL(userName, pw, name) values(?,?,?)`, [userName, password, name],
            function(error, result) {
                if (error) {
                    response.write(error.sqlMessage);
                }
                response.writeHead(302, { Location: `/` });
                response.end();
            }
        )
    }

    if (request.url == '/login') {
        const userName = request.body.userName;
        const password = request.body.password;
        db.query(`
        SELECT * FROM userTBL WHERE userName = ? AND pw = ?`, [userName, password],
            function(error, result) {
                if (error) {
                    response.write(error.sqlMessage);
                }
                if (result != "") {
                    var $main =
                        `<!DOCTYPE html>
                    <html lang="en">
                    
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    
                    <body>
                        <h1>로그인 성공</h1>
                    </body>
                    
                    </html>
                    `
                    console.log("login");
                    response.end($main);
                } else {
                    response.writeHead(302, { Location: `/login` });
                    require('./a')
                    console.log("?");
                    response.end();
                }

            }
        )
    }

})

app.listen(3000, () => {
    console.log('3000');
});