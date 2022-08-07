'use strict';

var dbConn = require('./../../config/db.config');

//Seller object create
var Seller = function(seller){  
    this.name         = seller.name;  
    this.phone        = seller.phone;  
    this.email        = seller.email;
    this.address_id   = seller.address_id;
};

Seller.create = function (newSeller, result) {
    dbConn.query("INSERT INTO seller set ?", newSeller, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            console.log(res.Id);  
            result(null, res.Id);
        }
    });
};

Seller.findById = function (id, result) {
    dbConn.query("Select * from seller where id = ? ", id, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            result(null, res);
        }
    });
};

Seller.findAll = function (result) {
    dbConn.query("Select * from seller", function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            console.log('seller : ', res);  
            result(null, res);
        }
    });
};

Seller.update = function(id, seller, result){
    dbConn.query("UPDATE seller SET name=?,phone=?,email=? WHERE id = ? ",
    [seller.name,seller.phone,seller.email, id], 
     function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            result(null, res);
        }
    });
};
Seller.delete = function(id, result){
    dbConn.query("DELETE FROM seller WHERE id = ?", [id], function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
            console.log(id);
        }else{  
            result(null, res);
        }
    });
};

module.exports= Seller;