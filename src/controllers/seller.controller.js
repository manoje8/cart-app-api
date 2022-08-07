'use strict';

const Seller = require('../models/seller.model');

exports.findAll = function(req, res) {
    Seller.findAll(function(err, seller) {  
        console.log('controller')  
        if (err)  
        res.send(err); 
        console.log('res', seller);  
        res.send(seller);
    });
};

exports.create = function(req, res) {
    const new_seller = new Seller(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  
        res.status(400).send({ 
            error:true, 
            message: 'Please provide all required field' });
        }else{Seller.create(new_seller, function(err, seller) {  
            if (err)  
            res.send(err);  
            res.json({error:false,message:"seller added successfully!",data:seller});
        });
    }
};

exports.findById = function(req, res) {
    Seller.findById(req.params.id, function(err, seller) {  
        if (err)  
        res.send(err);  
        res.json(seller);
    });
};

exports.update = function(req, res) {  
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){    
        res.status(400).send({ 
            error:true, 
            message: 'Please provide all required field' });  
        }else{    
            Seller.update(req.params.id, new Seller(req.body), function(err, seller) {   
                if (err)   
                res.send(err);   
                res.json({ error:false, message: 'seller successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Seller.delete( req.params.id, function(err, seller) {  
        if (err)  
        res.send(err);  
        console.log(req.params.id);
        res.json({ error:false, message: 'seller successfully deleted' });
    });
};