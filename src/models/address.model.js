'use strict';

var dbConn = require('./../../config/db.config');

//Address object create
var Address = function(address){  
    this.address_line_1  = address.address_line_1;  
    this.address_line_2  = address.address_line_2;  
    this.city            = address.city;
    this.pincode         = address.pincode;
};

Address.create = function (newAddress, result) {
    dbConn.query("INSERT INTO address set ?", newAddress, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            console.log(res.Id);  
            result(null, res.Id);
        }
    });
};

Address.findById = function (id, result) {
    dbConn.query("Select * from address where id = ? ", id, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            result(null, res);
        }
    });
};

Address.findAll = function (result) {
    dbConn.query("Select * from address", function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            console.log('address : ', res);  
            result(null, res);
        }
    });
};

Address.update = function(id, address, result){
    dbConn.query("UPDATE address SET address_line_1=?,address_line_2=?,city=?,pincode=? WHERE id = ?",
    [address.address_line_1,address.address_line_2,address.city,address.pincode, id], 
     function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            result(null, res);
        }
    });
};
Address.delete = function(id, result){
    dbConn.query("DELETE FROM address WHERE id = ?", [id], function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
            console.log(id);
        }else{  
            result(null, res);
        }
    });
};

module.exports= Address;