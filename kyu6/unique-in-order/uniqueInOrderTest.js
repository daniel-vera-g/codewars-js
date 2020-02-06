const chai = require("chai");

const { assert } = chai;
const uniqueInOrder = require("./uniqueInOrder");

describe("uniqueInOrder.js", () => {
	it("Should list items without any elements with the same value next to each other and preserve the original order of the elements.", () => {
		assert.equal(uniqueInOrder("AAAABBBCCDAABBB").toString, ["A", "B", "C", "D", "A", "B"].toString);
		assert.equal(uniqueInOrder("ABBCcAD").toString,  ['A', 'B', 'C', 'c', 'A', 'D'].toString);
		assert.equal(uniqueInOrder([1,2,2,3,3]).toString, [1, 2, 3].toString);
	});
});
