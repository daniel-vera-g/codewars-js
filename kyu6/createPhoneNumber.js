module.exports = function createPhoneNumber(numbers) {
	let phoneNumber = null;

	phoneNumber = "(" + numbers.slice(0,3).join("") + ")" + " " + numbers.slice(3,6).join("") + "-" + numbers.slice(6,10).join("");
	return phoneNumber;
};
