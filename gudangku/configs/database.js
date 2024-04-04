const mysql = require('promise-mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gudangku'
})

function getConnection(){
    return con
}

module.exports = {
    getConnection
}