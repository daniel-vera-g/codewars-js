// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
module.exports = function decipherThis(str) {
	// Get single words array
	let wordsArr = str.split(" ");

	// Apply decryption to each word
	wordsArr.forEach((el, i, arr) => {
		// Get Character code & replace first letter
		let charCodeRegx = /^\d+/g;
		el = el.replace(charCodeRegx, String.fromCharCode(el.match(charCodeRegx)));

		//  Switch second & last letter
		let elArr = el.split("");
		let last = elArr[elArr.length - 1];
		let second = elArr[1];
		elArr[1] = last;
		elArr[elArr.length - 1] = second;

		arr[i] = elArr.join("");
	});

	return wordsArr.join(" ");
};