const express = require('express');
const bodyParser = require('body-parser');
//Router Def
const dishRouter = express.Router();
//MiddileWares
dishRouter.use(bodyParser.json());
//Router
dishRouter.route('/');
//Main Routes
//http://localhost:3000/deshes
//All
dishRouter.all('deshes' ,(req ,res , next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    });
//Route GET /deshes
dishRouter.get('/deshes' , (req , res ,next)=>{
    res.end('We will send all the deshes to you very soon!');
    });

//Route POST /deshes
dishRouter.post('/deshes' , (req , res ,next)=>{
    res.end(`well add : ${req.body.name} with detels ${req.body.description}`);
    });

    //Route PUT /deshes
dishRouter.put('/deshes' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route DELETE /deshes
dishRouter.delete('/deshes' , (req , res ,next)=>{
    res.end('Not Allowd!');
    });

//Route With Params------------------------------------------------------------------
//http://localhost:3000/deshes/deshid

    //Route GET /deshes/:deshid
dishRouter.get('/deshes/:deshid' , (req , res ,next)=>{
    res.end('We will send deshes '+ req.params.deshid + ' to you very soon!');
    });

//Route POST /deshes/:deshid
dishRouter.post('/deshes/:deshid' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route PUT /deshes/:deshid
dishRouter.put('/deshes/:deshid' , (req , res ,next)=>{
    res.write(`well update the desh:` + req.params.deshid + "\n");
    res.end(`well update the desh:` + req.body.name + ` with ` + req.body.description);
    });

    //Route DELETE /deshes/:deshid
dishRouter.delete('/deshes/:deshid' , (req , res ,next)=>{
    res.end(`deleting ${req.params.deshid}`);
    });

    module.exports = dishRouter;