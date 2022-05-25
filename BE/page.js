const express = require('express');
var mysql = require('mysql');
const { NULL } = require('mysql/lib/protocol/constants/types');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB',
    dateStrings: "date"
});

const app = express();
//Static Folder
app.use(express.static('public'));
//EJS
app.set('view engine', 'ejs');

//How many posts we want to show on each page
const resultsPerPage = 3;

app.use((req, res) => {
    if (req.url == '/page') {
        let sql = 'SELECT * FROM comTBL';
        db.query(sql, (err, result) => {
            if (err) throw err;
            const numOfResults = result.length;
            const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
            let page = req.query.page ? Number(req.query.page) : 1;
            if (page > numberOfPages) {
                res.redirect('/?page=' + encodeURIComponent(numberOfPages));
            } else if (page < 1) {
                res.redirect('/?page=' + encodeURIComponent('1'));
            }
            //Determine the SQL LIMIT starting number
            const startingLimit = (page - 1) * resultsPerPage;
            //Get the relevant number of POSTS for this starting page
            sql = `SELECT * FROM comTBL LIMIT ${startingLimit},${resultsPerPage}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                let iterator = (page - 5) < 1 ? 1 : page - 1;
                let endingLink = (iterator + 4) <= numberOfPages ? (iterator + 4) : page + (numberOfPages - page);
                if (endingLink < (page)) {
                    iterator -= (page) - numberOfPages;
                }
                res.render('index', { data: result, page, iterator, endingLink, numberOfPages });
            });
        });
    }

});

// app.listen(process.env.PORT || 3000, () => {
//     console.log('Server has started on PORT 3000');
// });