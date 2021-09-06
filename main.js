const express = require('express');
let app = express();


// ROUTING
const viewRouter = require('./UI/routes/ViewRouter.js');

//Static file setup
app.use(express.static(__dirname + '/UI/'));
app.use('/', viewRouter.index);


// hosting http server
let port = process.env.PORT;
app.listen(port, console.log('NodeJS/Express server started on: ' + port));
