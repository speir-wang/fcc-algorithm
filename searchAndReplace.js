/**
 * Intermediate Algorithm Scripting: Search and Replace
 *
 * Perform a search and replace on the sentence using the arguments provided and return the new
 * sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 */

/**
 *
 * @param {String} str
 * @param {String} before
 * @param {String} after
 */
function myReplace(str, before, after) {
	let newAfter = "";

	if (before.slice(0, 1) === before.slice(0, 1).toUpperCase()) {
		newAfter = after.slice(0, 1).toUpperCase() + after.slice(1);
	}
	return str
		.split(" ")
		.map(word => {
			if (word === before) {
				if (newAfter.length > 0) return newAfter;
				return after;
			}
			return word;
		})
		.join(" ");
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
