var mysql = require("mysql");
var connection;


//Setup JAWSDB connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    //Setup mysql connection
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "tesla",
        database: "burger_db"
    });
  }
// Make connection to mysql
    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }

        console.log("connected as id " + connection.threadId);
    });

    // Export connection for our ORM to use.
    module.exports = connection;