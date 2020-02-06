// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
const uniqueInOrder = function(iterable) {
	let uniqueArr = [];

	if (!Array.isArray(iterable)) {
		// Split to Array & filter whitespaces
		iterable = iterable.split("").filter(elem => elem != " ");
	}

	// Remove duplicate elements next to each other
	iterable.forEach((e, i, arr) => {
		if(i === 0 || !(arr[i - 1] === e)) uniqueArr.push(e);
	});

	return uniqueArr;
};

module.exports = uniqueInOrder;
