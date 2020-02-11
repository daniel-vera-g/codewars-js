const assert = require("assert");
const createPhoneNumber = require("../kyu6/createPhoneNumber");

describe("Basic tests", () => {
	it("Creates a phone number with an defined array as input.", () => {
		assert.deepStrictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
		assert.deepStrictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
		assert.deepStrictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
	});
});
