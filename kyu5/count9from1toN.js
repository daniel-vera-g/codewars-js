// https://www.codewars.com/kata/55143152820d22cdf00001bb/train/javascript
// return the number of 9's used to count out 1 to n
// module.exports =
 function number9(n) {
	let count = 0;
	let arr = [];

	// TODO cleaner code through functional programming
	for (let i = 0; i <= n; i++) {
		arr[i] = i;
		// let nString = i.toString();

		// if (/9/g.test(nString)) count += ((nString || "").match(/9/g) || []).length;
	}

	return arr;
}

console.log(number9(10000000000));