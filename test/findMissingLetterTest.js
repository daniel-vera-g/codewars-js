const assert = require("assert");
const findMissingLetter = require("../kyu6/findMissingLetter");

describe("findMissingLetter.js", function(){
  it("Should return the missing letter of an array of lowercase letters.", function(){
   assert.strictEqual(findMissingLetter(['a','b','c','d','f']), 'e');
  });
  it("Should return the missing letter of an array of uppercase letters.", function(){
    assert.strictEqual(findMissingLetter(['O','Q','R','S']), 'P');
  });
});