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
			return array[index + 1] - item > 1;
		});
	missingLetterCode = missingLetterCode + 1;
	return isNaN(missingLetterCode) ? undefined : String.fromCharCode(missingLetterCode);
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/**
 * using isNaN() to test if a number is NaN, comparing the number === NaN is not working as
 * expected.
 */
