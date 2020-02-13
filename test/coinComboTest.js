
const assert = require("assert");
const coinCombo = require('../kyu7/coinCombo');

describe('coinCombo.js', () => {
	it('takes 1 and returns, 1 Penny.', () => {
		assert.deepStrictEqual(coinCombo(1).toString(), [1, 0, 0, 0].toString());
	});

	it('takes 6 and returns, 1 Penny, 1 Nickle.', () => {
		assert.deepStrictEqual(coinCombo(6).toString(), [1, 1, 0, 0].toString());
	});

	it('takes 11 and returns, 1 Dime, 1 Penny.', () => {
		assert.deepStrictEqual(coinCombo(11).toString(), [1, 0, 1, 0].toString());
	});
	it('takes 6 and returns, 1 Nickle, 1 Penny.', () => {
		assert.deepStrictEqual(coinCombo(6).toString(), [1, 1, 0, 0].toString());
	});
});
