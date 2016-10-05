var mongoose=require('mongoose');
var schema=mongoose.Schema;


var movie=new schema({
    moviename:String,
    year:String,
    imdbid:String,
    source:String
});

module.exports=mongoose.model('movie',movie);
