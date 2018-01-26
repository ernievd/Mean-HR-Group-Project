const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const employeeSchema = require('./schema.router');

// Define our Schema (our Document template)
// let employeeSchema = new mongoose.Schema(
// 	{
// 		name: {type: String, unique: false, required: true},
// 		idNumber: {type: Number, unique: true, required: true},
// 		salary: {type: Number, unique: false, required: true},
// 		title: {type: String, unique: false, required: true},
// 		hireDate : {type: Date, unique: false, required: true}
// 	}
// )

// Define our Model
// mongoose.model( name of the collection, schema definition)
let Employee = mongoose.model('Employee', employeeSchema);

// GET route


// POST route


// DELETE route


module.exports = router;