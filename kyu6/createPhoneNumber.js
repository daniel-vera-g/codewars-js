module.exports = function createPhoneNumber(numbers) {
	// Use .slice to get each part of the phone number from the array
	return (
		"(" + numbers.slice(0, 3).join("") + ")" + " " + numbers.slice(3, 6).join("") + "-" + numbers.slice(6, 10).join("")
	);
};
