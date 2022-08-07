const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({  
    host     : 'localhost',  
    user     : 'root',  
    password : 'ma_Deepan2001',  
    database : 'cart'
});
dbConn.connect(function(error) {  
    if(!!error){
        console.log(error);
    }else{
        console.log("Database is now connected");
    }
});

module.exports = dbConn;