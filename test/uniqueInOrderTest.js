const assert = require("assert");
const uniqueInOrder = require("../kyu6/uniqueInOrder");

describe("uniqueInOrder.js", () => {
	it("Should list items without any elements with the same value next to each other and preserve the original order of the elements.", () => {
		assert.deepStrictEqual(uniqueInOrder("AAAABBBCCDAABBB").toString, ["A", "B", "C", "D", "A", "B"].toString);
		assert.deepStrictEqual(uniqueInOrder("ABBCcAD").toString,  ['A', 'B', 'C', 'c', 'A', 'D'].toString);
		assert.deepStrictEqual(uniqueInOrder([1,2,2,3,3]).toString, [1, 2, 3].toString);
	});
});
