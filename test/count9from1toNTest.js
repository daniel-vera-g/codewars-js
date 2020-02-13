const assert = require("assert");
const number9 = require("../kyu5/count9from1toN");

describe("count9from1toN", () => {
	it("Counts the number of 9 in the range from 1 to n.", () => {
		assert.deepStrictEqual(number9(1), 0, "Nein!");
		assert.deepStrictEqual(number9(9), 1, "Nein!");
	});
	it('Also counts the 9 in big numbers', () => {
		assert.deepStrictEqual(number9(100), 20, "Nein!");
		assert.deepStrictEqual(number9(565754), 275645, "Nein!");
		assert.deepStrictEqual(number9(10000000000), 10000000000, "Nein!");
	});
});
