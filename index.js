const http = require('http');
const express = require('express');

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use((req , res , next)=>{
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type' , 'text/html');
res.end('<!DOCTYPE html><html lang="en"><head><title>Monzer Abdullaziz</title></head><body><h1>Express Text</h1></body></html>');
});
const Server = http.createServer(app);
Server.listen(port , hostname , ()=>{
console.log(`Server Running At ${hostname}:${port}`);
});