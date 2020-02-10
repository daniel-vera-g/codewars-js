// https://www.codewars.com/kata/5862fb364f7ab46270000078/train/javascript
module.exports = function encrypt(text, rule) {
	// Form validation
	if (text === undefined || text === null || text === "") return "";

	// Convert to Array, iterate through text & encrypt each letter
	let encryptedText = text.split("").map(el => {
		// Check, whether there is an ASCII overflow & handle it correctly
		return el.charCodeAt() + rule >= 256
			? String.fromCharCode(handleOverflow(el, rule))
			: String.fromCharCode(el.charCodeAt() + rule);
	});

	// Join back array of chars to String
	return encryptedText.join("");
};

function handleOverflow(el, rule) {
	let elChar = null;

	elChar = el.charCodeAt() + rule - 256;
	el = String.fromCharCode(elChar);

	while (elChar >= 256) {
		elChar = el.charCodeAt() - 256;
		el = String.fromCharCode(elChar);
	}

	return elChar;
}
