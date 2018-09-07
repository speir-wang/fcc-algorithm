/**
 * Intermediate Algorithm Scripting: Sum All Numbers in a Range
 * sumAll([1, 4]) should return a number.
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 * sumAll([5, 10]) should return 45.
 * sumAll([10, 5]) should return 45.
 */

/**
 *
 * @param {*} arr
 * We'll pass you an array of two numbers. Return the sum of those two
 * numbers plus the sum of all the numbers between them.The lowest number
 * will not always come first.
 */
function sumAll(arr) {
	if (arr.length !== 2) return;

	let sortedArr = arr.sort((a, b) => {
		return a - b;
	});

	let newArr = [];
	for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
		newArr.push(i);
	}
	return newArr.reduce((total, item) => {
		return total + item;
	});
}

/**
 * using spread function
 */
function sumAll(arr) {
	var sum = 0;
	for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
		sum += i;
	}
	return sum;
}
