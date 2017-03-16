var connection = require('./connection.js');

var orm = {
  selectAll: function(cb){
    connection.query("SELECT * FROM burgers", function(err, res){
      cb(res); 
    })
  },

  insertOne: function(name, cb){
    connection.query("INSERT INTO burgers(burger_name, devoured)values('"+name+"', "+false+")", function(err, res){
      cb(res);
    });
  },

  updateOne: function(name, cb){
    connection.query("UPDATE burgers SET devoured=true WHERE burger_name='"+name+"'", function(err, res){
      if(err) throw err; 
      cb(res);
    });
  },

  delete: function(name, cb){
    connection.query("DELETE from burgers WHERE burger_name='"+name+"'", function(err, res){
      if(err) throw err;
      cb(res);
    });
  }
}

module.exports = orm; 









// var connection = require("../config/connection.js");

// // Helper function for SQL syntax.
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     if (Object.hasOwnProperty.call(ob, key)) {
//       arr.push(key + "=" + ob[key]);
//     }
//   }

//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (?)";
//     // queryString += printQuestionMarks(vals.length);
//     // queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

// // Export the orm object for the model (cat.js).
// module.exports = orm;