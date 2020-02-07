const assert = require("assert");
const comp = require("./comp.js");

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
const b1 = [16, 98, 27, 87, 58, 33, 79, 59];
const b2 = [256, 9604, 729, 7569, 3364, 1089, 6242, 3481];
const c1 = [undefined, null];
const c2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

describe('Checks whether the two arrays have the "same" elements, with the same multiplicities.', () => {
	it('Compares compatible arrays', () => {
		assert.deepEqual(comp(a1, a2), true);
	});
	it('Compares incompatible arrays', () => {
		assert.deepEqual(comp(b1, b2), false);
	});
	it('Compares with null and undefined values', () => {
		assert.deepEqual(comp(c1, c2), false);
	});
});
