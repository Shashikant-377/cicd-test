var request = require("supertest")
var app = require("../app")

describe("GEET /", function(){
    it("respond with hello world", function(done){
        // response is "hello world"
 request(app).get('/').expect('hello world', done);
    })
})