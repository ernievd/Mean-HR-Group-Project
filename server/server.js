const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reportsRouter = require('./routes/reports.router');
const trackRouter = require('./routes/track.router');
const addRouter = require('./routes/add.router');
// const ***** = require('./routes/*****');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/reports', reportsRouter);
app.use('/track', trackRouter);
app.use('/employees', addRouter);

/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');

// 27017 is the default mongo port number
const databaseUrl = 'mongodb://localhost:27017/hr_employees';

// connect to mongoDB
mongoose.connect(databaseUrl);

// optional output from connectione events
mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
});

mongoose.connection.on('error', () => {
	console.log('mongoose connection failed');
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
	console.log('Listening on port: ', app.get('port'));
});
