//Requirements
const express = require('express');
const bodyParser = require('body-parser');
const serviceWorker = require('./serviceWorker');

//Use express and parse requests with JSON
const app = express();
app.use(bodyParser.json());

//EndPoints
app.get('/stats', serviceWorker.getStats);

//Define the port the server listens on
app.listen(3008, function(){
    console.log(`listening on port: ${this.address().port}`);
})