const express = require('express')
const router = express.Router()
const sellerController =   require('../controllers/seller.controller');

// Retrieve all employees
router.get('/', sellerController.findAll);

// Create a new employee
router.post('/', sellerController.create);

// Retrieve a single employee with id
router.get('/:id', sellerController.findById);

// Update a employee with id
router.put('/:id', sellerController.update);

// Delete a employee with id
router.delete('/:id', sellerController.delete);

module.exports = router