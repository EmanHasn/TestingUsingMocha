var myCode = require("../index");
var mocha = require("assert");
var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();
var count=1;

// no.1
// describe.skip("unit test for capitalizeText function", function(){
//     it("test that return string", function(){
//         myCode.capitalizeText("iti").should.be.a("string");
//     })
//     it("throw error when pass number", function(){
//         expect(function(){
//             myCode.capitalizeText(12)
//         }).to.throw(TypeError, "parameter should be string");
//     })
//     it("takes lower to cap", function(){
//         mocha.equal(myCode.capitalizeText("iti"), "ITI");
//     })
//     it("test that if the params string must retutn the same value", function(){
//         expect(myCode.capitalizeText("iti")).to.be.not.equal("hello");
//     })
    
// })

//no.2
describe("unit test for createArray function" , function(){
    it("test that the return value of type array SHOULD", function(){
        setTimeout(function()
        {
            console.log("I wait 5 second 1")
            myCode.createArray(2).should.be.a("Array");
        }, 5000);
        count;
    });

    it('should take less than 5000ms', function (done) {
        this.timeout(5000);
        done();
        setTimeout(
            function(){
                console.log("I wait 10 second 2")
                myCode.createArray(2).should.be.a("Array");
            }, 10000);
            count++;
      });
        it("test that the return value of type array SHOULD", function(){
            myCode.createArray(2).should.be.a("Array");
                  count++;
             })

    it("test that the return value of type array EXPECT", function(){
        expect(myCode.createArray(3)).to.be.an("array");
        count++;
    })
    it("test that the return value of type array ASSERT", function(){
        assert.isArray(myCode.createArray(3));
        count++;
    })
    it("test if we pass 3 it will return array of length 3 and test it's include 1", function(){
        expect(myCode.createArray(3)).to.have.lengthOf(3).that.include(1);
        count++;
    })
    
    afterEach(() => {
        console.log("CASE NO. " , count);
    })
    this.afterAll(()=>{
        console.log("COUNT OF ALL TESTS", count);
    })
})

