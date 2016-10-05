var mongoose=require('mongoose');
var schema=mongoose.Schema;


var weather=new schema({
    day:String,
    temp:String,
    min:String,
    max:String,
    hpa:String,
    sea:String,
});

module.exports=mongoose.model('weather',weather);
