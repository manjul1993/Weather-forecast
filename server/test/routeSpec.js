var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8085");



describe("Testing the add route", function(err){
 it("should insert weather", function(done){
   url
       .post("/weather/day")
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         //expect(res.text).to.be.equal("Hello!");
         res.text.should.be.equal("Movie Inserted");
         //assert(res.text == "Hello!","Test has failed");
         done();
       });
 });
});
