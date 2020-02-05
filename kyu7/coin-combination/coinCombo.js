// eslint-disable-next-line max-length
// https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript
const coinCombo = function (cents) {
	let dimes = 0;
	let nickles = 0;
	let quarters = 0;

	while (cents >= 5) {
		//   Quarters
		if (cents / 25 >= 1) {
			cents -= 25;
			quarters++;
		}
		// Dimes
		else if (cents / 10 >= 1) {
			cents -= 10;
			dimes++;
		}
		// Nickles
		else if (cents / 5 >= 1) {
			cents -= 5;
			console.log(cents);
			nickles++;
			console.log(nickles);
		}
	}
	return [cents || 0, nickles || 0, dimes || 0, quarters || 0];
};

module.exports = coinCombo;
