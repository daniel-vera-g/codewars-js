const assert = require("assert");
const encrypt = require("../kyu6/basicEncryption");

describe("basic encryption", function() {
  it("Does not encrypt empty inputs", function() {
    assert.strictEqual(encrypt("", 1), "");
  });
  it('Encrypts characters.', () => {
    assert.strictEqual(encrypt("a", 1), "b");
  });
  it('Encrypts sentences correctly', () => {
    assert.strictEqual(encrypt("please encrypt me", 2), "rngcug\"gpet{rv\"og");
  });
  it('Handels ASCII value overflow correctly', () => {
    assert.strictEqual(encrypt("pxaiztnwsvlsps", 397), "ý\u0005îö\u0007\u0001û\u0004\u0000\u0003ù\u0000ý\u0000");
    assert.strictEqual(encrypt("lanaoazyskgrmlpmjtnssxfauxzfrwqewh", 180), ' \u0015"\u0015#\u0015.-\'\u001f\u001b&! $!\u001e("\'\',\u001a\u0015),.\u001a&+%\u0019+\u001c');
  });
});