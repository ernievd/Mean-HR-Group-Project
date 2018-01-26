const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema(
	{
		name: {type: String, unique: false, required: true},
		idNumber: {type: Number, unique: true, required: true},
		salary: {type: Number, unique: false, required: true},
		title: {type: String, unique: false, required: true},
		hireDate : {type: Date, unique: false, required: true}
	}
)

module.exports = employeeSchema;