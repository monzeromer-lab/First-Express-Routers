const http = require('http');
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

//Routes
//All
app.all('deshes' ,(req ,res , next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    });

//Route GET /deshes
app.get('/deshes' , (req , res ,next)=>{
    res.end('We will send all the deshes to you very soon!');
    });

//Route POST /deshes
app.post('/deshes' , (req , res ,next)=>{
    res.end(`well add : ${req.body.name} with detels ${req.body.description}`);
    });

    //Route PUT /deshes
app.put('/deshes' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route DELETE /deshes
app.delete('/deshes' , (req , res ,next)=>{
    res.end('Not Allowd!');
    });

//------------------------------------------------------------------

    //Route GET /deshes/:deshid
app.get('/deshes/:deshid' , (req , res ,next)=>{
    res.end('We will send deshes '+ req.params.deshid + ' to you very soon!');
    });

//Route POST /deshes/:deshid
app.post('/deshes/:deshid' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route PUT /deshes/:deshid
app.put('/deshes/:deshid' , (req , res ,next)=>{
    res.write(`well update the desh: ${req.params.deshid}`);
    res.end(`well update the desh: ${req.params.name} with ${req.params.description}`);
    });

    //Route DELETE /deshes/:deshid
app.delete('/deshes/:deshid' , (req , res ,next)=>{
    res.end(`deleting ${req.params.deshid}`);
    });

    //Server
const Server = http.createServer(app);
    Server.listen(port , hostname , ()=>{
    console.log(`Server Running At ${hostname}:${port}`);
    });