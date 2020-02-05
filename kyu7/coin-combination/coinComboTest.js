const chai = require('chai');

const { assert } = chai;
const coinCombo = require('./coinCombo');

describe('coinCombo.js', () => {
	it('takes 1 and returns, 1 Penny.', () => {
		assert.equal(coinCombo(1).toString(), [1, 0, 0, 0].toString());
	});

	it('takes 6 and returns, 1 Penny, 1 Nickle.', () => {
		assert.equal(coinCombo(6).toString(), [1, 1, 0, 0].toString());
	});

	it('takes 11 and returns, 1 Dime, 1 Penny.', () => {
		assert.equal(coinCombo(11).toString(), [1, 0, 1, 0].toString());
	});
	it('takes 6 and returns, 1 Nickle, 1 Penny.', () => {
		assert.equal(coinCombo(6).toString(), [1, 1, 0, 0].toString());
	});
});
