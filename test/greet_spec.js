var greet = require("../index.js");

describe('greet',function () {
    it("should greet a person by name",function(){
        expect(greet('jj',false)).to.eql('hello, jj');
    });
    it("should greet a person flirtatiously if drunk",function(){
        expect(greet('jj', true)).to.eql('hello jj, you look sexy today')});
});
