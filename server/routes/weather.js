var express = require('express');
var router = express.Router();
var weathers = require('../models/weather');
/* GET users listing. */


router.post('/day', function(req, res) {
  console.log(req.body);
  var wea=new weathers();
  wea.day=req.body.data.day;
  wea.temp=req.body.data.temp;
  wea.max=req.body.data.max;
  wea.min=req.body.data.min;
  wea.hpa=req.body.data.hpa;
  wea.Sea=req.body.data.sea;
  wea.save(function(err){
    if(err){
        res.send(err);
    }
    else {
       res.send("Weather Saved Sucessfully");
    }
  });

});

module.exports = router;
