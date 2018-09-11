/**
 * Intermediate Algorithm Scripting: DNA Pairing
 *
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

/**
 *
 * @param {String} str
 */
function pairElement(str) {
	let basicPair = {
		A: "T",
		T: "A",
		C: "G",
		G: "C"
	};

	return str.split("").reduce((result, element, index) => {
		let pair = basicPair[element];
		result[index] = [element, pair];
		return result;
	}, []);
}
