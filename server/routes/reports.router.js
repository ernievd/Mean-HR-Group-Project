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

// dummy data GET route

router.get('/dummydata', (req, res) => {
	console.log('hit reports GET route');

    // create an instnace of our model
    let employeeToAdd = new Employee({
		name: 'Andrew Johnson',
		idNumber: 136,
		salary: 15000,
		title: 'Bossman',
		hireDate: '2017-01-04'
	});

    // create a new Document in our database and collection
    employeeToAdd.save( (error, savedEmployee) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            console.log('new employee Document: ', savedEmployee);
            res.sendStatus(201);
        }
    });

});

// GET route
router.get('/', (req, res) => {
	console.log('hit reports GET route');

	Employee.find({}, (error, foundEmployees) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            console.log('new Employee Document: ', foundEmployees);
            res.send(foundEmployees);
        }
	});
});

// Count
router.get('/count', (req, res) => {
	console.log('hit reports count route');

	Employee.count({}, (error, foundEmployees) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            console.log('new Employee Document: ', foundEmployees);
            res.send({count: foundEmployees});
        }
	});
});


// // GET average route
// router.get('/average', (req, res) => {
// 	console.log('hit reports GET average route');
// 	Employee.aggregate({
// 		"$group": {
// 			"_id": null,
// 			"avg_Salary": { "$avg": "$salary" }
// 			}
// 		} , (error, averageFound) => {
// 		if (error) {
// 			console.log('error on save: ', error);
// 			res.sendStatus(500);
// 		} else {
// 			console.log('Got the average: ', averageFound);
// 			res.send(averageFound);
// 		}
// 	});
//
// });





// POST route



// DELETE route


module.exports = router;