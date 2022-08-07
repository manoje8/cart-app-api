'use strict';

var dbConn = require('./../../config/db.config');

//Customer object create
var Customer = function(customer){  
    this.name         = customer.name;  
    this.phone        = customer.phone;  
    this.email        = customer.email;
    this.address_id   = customer.address_id;
};

Customer.create = function (newCustomer, result) {
    dbConn.query("INSERT INTO customer set ?", newCustomer, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            console.log(res.Id);  
            result(null, res.Id);
        }
    });
};

Customer.findById = function (id, result) {
    dbConn.query("Select * from customer where id = ? ", id, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            result(null, res);
        }
    });
};

Customer.findAll = function (result) {
    dbConn.query("Select * from customer", function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            console.log('customer : ', res);  
            result(null, res);
        }
    });
};

Customer.update = function(id, customer, result){
    dbConn.query("UPDATE customer SET name=?,phone=?,email=? WHERE id = ? ",
    [customer.name,customer.phone,customer.email, id], 
     function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            result(null, res);
        }
    });
};
Customer.delete = function(id, result){
    dbConn.query("DELETE FROM customer WHERE id = ?", [id], function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
            console.log(id);
        }else{  
            result(null, res);
        }
    });
};

module.exports= Customer;