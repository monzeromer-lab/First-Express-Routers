const http = require('http');
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./Router/dishRouter');

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/' , dishRouter);





    //Server
const Server = http.createServer(app);
    Server.listen(port , hostname , ()=>{
    console.log(`Server Running At ${hostname}:${port}`);
    });