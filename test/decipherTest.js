var assert = require("assert");
var decipherThis = require("../kyu6/decipher");

describe("decipherThis", () => {
	it("Deciphers a sentence.", () => {
		assert.deepStrictEqual(
			decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
			"Have a go at this and see how you do"
		);
	});
});
