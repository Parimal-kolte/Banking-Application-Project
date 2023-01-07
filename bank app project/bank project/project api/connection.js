var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "India@11",
  database: 'traine'
});

con.connect(function(err) {
  if (err) throw err;
   con.query("select * from customer",function(err,result){
    if(err)throw err;
    console.log("all result are here 1",result)
   })
});
module.exports=con;