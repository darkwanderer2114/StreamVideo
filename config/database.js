var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'db_falldetection'
// });

var connection = mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    port: 3306,
    user: 'sql9237825',
    password: 'XdwAFaSM3Z',
    database: 'sql9237825'
});

connection.connect();

module.exports = connection;