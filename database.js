const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'remotemysql.com',
    user: '532WNAUW4A',
    password: 'o3czoHsmEB',
    database: '532WNAUW4A',
    multipleStatements: true
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;