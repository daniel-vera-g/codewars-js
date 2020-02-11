// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
const comp = function(array1, array2) {
	// Check form
	if (!Array.isArray(array1) || !array1.length || !Array.isArray(array2) || !array2.length) return false;

	// Compare regular & quadratic value in both arrays
	return (
		array1
			.map(e => e * e)
			.sort()
			.toString() == array2.sort().toString()
	);

};

module.exports = comp;
