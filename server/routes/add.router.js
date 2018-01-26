const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define our Schema (our Document template)
let employeeSchema = new mongoose.Schema(
	{
		name: {type: String, unique: false, required: true},
		idNumber: {type: Number, unique: true, required: true},
		salary: {type: Number, unique: false, required: true},
		title: {type: String, unique: false, required: true},
		hireDate : {type: Date, unique: false, required: true}
	}
)

// Define our Model
// mongoose.model( name of the collection, schema definition)
let Employee = mongoose.model('Employee', employeeSchema);

// GET route


// POST route

// POST route
router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    // create an instance of our model
    let employeeToAdd = new Employee(req.body);

    // create a new Document in our database and collection
    employeeToAdd.save( (error, savedEmployee) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);            
        } else {
            console.log('new game Document: ', savedEmployee);            
            res.sendStatus(201);
        }
    }); // end save
    
}); // end post route


// DELETE route


module.exports = router;