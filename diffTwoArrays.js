/**
 * Intermediate Algorithm Scripting: Diff Two Arrays
 *
 * Compare two arrays and return a new array with any items only found in
 * one of the two given arrays, but not both. In other words, return the
 * symmetric difference of the two arrays.
 */

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function diffArray(arr1, arr2) {
	const newArr = arr1.concat(arr2);
	return newArr.filter(
		item => newArr.indexOf(item) === newArr.lastIndexOf(item)
		// if the last index equals to the first index, then it means there is only one such item in the array.
	);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
