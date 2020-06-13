const http = require('http');
const express = require('express');
const morgan  = require('morgan');

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use((req , res , next)=>{
res.statusCode = 200;
res.setHeader('Content-Type' , 'text/html');
res.end('<!DOCTYPE html><html lang="en"><head><title>Monzer Abdullaziz</title></head><body><h1>Express Text</h1></body></html>');
});
const Server = http.createServer(app);
Server.listen(port , hostname , ()=>{
console.log(`Server Running At ${hostname}:${port}`);
});