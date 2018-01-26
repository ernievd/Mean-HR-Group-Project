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

router.get('/', (req, res) => {
    Employee.find({}, (error, employeeList) => {
        if(error){
            console.log('error on find:', error);
            res.sendStatus(500);
        } else{
            console.log('Found Employees:', employeeList);
            res.send(employeeList);
        }
    });
});

router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(
        {"_id": req.params.id},
        {$set: req.body},
        (error, updatedEmployee) =>{
            if(error){
                console.log('error on update:', error);
                res.sendStatus(500);
            } else{
                console.log('Employee before it was updated:', updatedEmployee); 
                res.sendStatus(200);
            }
        }
    )
});

router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(
        {"_id": req.params.id},
        (error, deletedEmployee) =>{
            if(error){
                console.log('error on remove:', error);
                res.sendStatus(500);
            } else{
                console.log('Employee removed:', deletedEmployee); 
                res.sendStatus(200);
            }
        }
    )
})

module.exports = router;