var mysql = require ('mysql');
var connection;

if (process.envJAWSDB_URL) {

 connection = mysql.createConnection(process.envJAWSDB_URL); 
} else {
  connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'burgers_db'
});
connection.connect();
module.exports = connection;