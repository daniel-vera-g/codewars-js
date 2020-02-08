// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
module.exports = function findMissingLetter(array) {
	let alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let missingLetters = undefined;

	// Mutate alphabet to only contain elements in the range of the given array
	let beg = alphabet.indexOf(array[0]);
	let end = alphabet.indexOf(array[array.length - 1]);
	alphabet = alphabet.slice(beg, end);

	// Check both arrays & filter missing letter
	missingLetters = alphabet.filter(elem => array.indexOf(elem) === -1);

	// Check if multiple letters are missing
	if (missingLetters.length > 1) throw new Error("Multiple numbers missing");

	return missingLetters[0];
};
