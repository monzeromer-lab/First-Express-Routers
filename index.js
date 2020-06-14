const http = require('http');
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./Router/dishRouter');
const promoRouter = require('./Router/promoRouter');
const leaderRouter = require('./Router/leaderRouter');
//Server Worker
const app = express();
//Server Propretes
const hostname = 'localhost';
const port = 3000;
//MiddileWare
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/' , dishRouter);
app.use('/' , promoRouter);
app.use('/' , leaderRouter);
//Server
const Server = http.createServer(app);
    Server.listen(port , hostname , ()=>{
    console.log(`Server Running At ${hostname}:${port}`);
    });