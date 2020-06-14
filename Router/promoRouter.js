const express = require('express');
const bodyParser = require('body-parser');
//Router Def
const promoRouter = express.Router();
//MiddileWares
promoRouter.use(bodyParser.json());
//Router
promoRouter.route('/');
//Main Routes
//http://localhost:3000/promotions
//All
promoRouter.all('promotions' ,(req ,res , next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    });
//Route GET /promotions
promoRouter.get('/promotions' , (req , res ,next)=>{
    res.end('We will send all the PROMO to you very soon!');
    });

//Route POST /promotions
promoRouter.post('/promotions' , (req , res ,next)=>{
    res.end(`well add : ${req.body.name} with detels ${req.body.description}`);
    });

    //Route PUT /promotions
promoRouter.put('/promotions' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route DELETE /promotions
promoRouter.delete('/promotions' , (req , res ,next)=>{
    res.end('Not Allowd!');
    });

//Route With Params------------------------------------------------------------------
//http://localhost:3000/promotions/:promoid

    //Route GET /promotions/:promoid
promoRouter.get('/promotions/:promoid' , (req , res ,next)=>{
    res.end('We will send PROMO: '+ req.params.promoid + ' to you very soon!');
    });

//Route POST /promotions/:promoid
promoRouter.post('/promotions/:promoid' , (req , res ,next)=>{
    res.statusCode = 403;
    res.end('Not Supported Here!');
    });

    //Route PUT /promotions/:promoid
promoRouter.put('/promotions/:promoid' , (req , res ,next)=>{
    res.write(`well update the PROMO:` + req.params.promoid + "\n");
    res.end(`well update with:` + req.body.name + ` with ` + req.body.description);
    });

    //Route DELETE /promotions/:promoid
promoRouter.delete('/promotions/:promoid' , (req , res ,next)=>{
    res.end(`deleting promotion ${req.params.promoid}`);
    });

    module.exports = promoRouter;