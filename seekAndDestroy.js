/**
 * Intermediate Algorithm Scripting: Seek and Destroy
 * You will be provided with an initial array (the first argument in the
 * destroyer function), followed by one or more arguments. Remove all
 * elements from the initial array that are of the same value as these
 * arguments.
 */
/**
 *
 * @param {Array} arr
 */
function destroyer(arr) {
	// Array.from(arguments) = [...arguments];
	return arr.filter(item => ![...arguments].slice(1).includes(item));
}

console.log(destroyer([2, 3, 2, 3], 2, 3));
