const express = require('express')
const app = express();

var mysql = require('mysql'); // Npm for mysql

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'letmein',
    database: 'fullstack_demo'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/userdetails', function (req, res) {

    // connection.query('select * from user_test', function (err, result) {
    //     if (err) {
    //         res.send('Error occured')
    //     } else {
    //         res.json(result);
    //     }
    // })

    // Create and use of promise function
    let userDetail = new Promise(function (resolve, reject) {
        connection.query('select * from user_test', function (err, result) {
            if (err) {
                reject('Error occured');
            } else {
                resolve(result);
            }
        })
    });


    // Consume the promise result
    userDetail.then((result) => {
        res.json(result);
    }).catch((error) => {
        res.send('Error Occured');
    })

})

var port = 3000;

app.listen(port, function () {
    console.log('Application listening on ', port);
})