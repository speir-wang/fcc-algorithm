/**
 * Intermediate Algorithm Scripting: Missing letters
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

/**
 *
 * @param {String} str
 */
function fearNotLetter(str) {
	let missingLetterCode = str
		.split("")
		.map(letter => letter.charCodeAt(0))
		.find((item, index, array) => {
			// console.log(item);
			// console.log(array[index + 1]);
			// if () {
			// 	console.log("FOUND", item + 1);
			// }
			return array[index + 1] - item > 1;
		});

	return missingLetterCode;
}

console.log(fearNotLetter("bcdf"));
// fearNotLetter("bcdf");
