'use strict';

var dbConn = require('./../../config/db.config');

//Item object create
var Item = function(item){  
    this.name         = item.name;  
    this.description  = item.description;  
    this.type         = item.type;  
};

Item.create = function (newItem, result) {
    dbConn.query("INSERT INTO item set ?", newItem, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            console.log(res.Id);  
            result(null, res.Id);
        }
    });
};

Item.findById = function (id, result) {
    dbConn.query("Select * from items where id = ? ", id, function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(err, null);
        }else{  
            result(null, res);
        }
    });
};

Item.findAll = function (result) {
    dbConn.query("Select * from item", function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            console.log('items : ', res);  
            result(null, res);
        }
    });
};

Item.update = function(id, item, result){
    dbConn.query("UPDATE items SET name=?,description=?,type=? WHERE id = ?",
    [item.name,item.description,item.type, id], 
     function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
        }else{  
            result(null, res);
        }
    });
};
Item.delete = function(id, result){
    dbConn.query("DELETE FROM item WHERE id = ?", [id], function (err, res) {
        if(err) {  
            console.log("error: ", err);  
            result(null, err);
            console.log(id);
        }else{  
            result(null, res);
        }
    });
};

module.exports= Item;