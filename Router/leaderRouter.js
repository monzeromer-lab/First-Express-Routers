const express = require('express');
const bodyParser = require('body-parser');
//Router Def
const leaderRouter = express.Router();
//MiddileWares
leaderRouter.use(bodyParser.json());
//Router
leaderRouter.route('/');
//Main Routes
//http://localhost:3000/leaders
//All
leaderRouter.all('leaders' ,(req ,res , next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    });
//Route GET /leaders
leaderRouter.get('/leaders' , (req , res ,next)=>{
    res.end('We will send all the leader to you very soon!');
    });

//Route POST /leaders
leaderRouter.post('/leaders' , (req , res ,next)=>{
    res.end(`well add : ${req.body.name} with detels ${req.body.description}`);
    });

    //Route PUT /leaders
leaderRouter.put('/leaders' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route DELETE /leaders
leaderRouter.delete('/leaders' , (req , res ,next)=>{
    res.end('Not Allowd!');
    });

//Route With Params------------------------------------------------------------------
//http://localhost:3000/leaders/:leaderId

    //Route GET /leaders/:leaderid
leaderRouter.get('/leaders/:leaderid' , (req , res ,next)=>{
    res.end('We will send leader '+ req.params.leaderid + ' to you very soon!');
    });

//Route POST /leaders/:leaderid
leaderRouter.post('/leaders/:leaderid' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route PUT /;leaders/:leaderid
leaderRouter.put('/leaders/:leaderid' , (req , res ,next)=>{
    res.write(`well update the leader:` + req.params.leaderid + "\n");
    res.end(`well update with:` + req.body.name + ` with ` + req.body.description);
    });

    //Route DELETE /leaders/:leaderid
leaderRouter.delete('/leaders/:leaderid' , (req , res ,next)=>{
    res.end(`deleting ${req.params.leaderid}`);
    });

    module.exports = leaderRouter;