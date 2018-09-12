/**
 * Intermediate Algorithm Scripting: Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */
/**
 *
 * @param {String} str
 */
function convertHTML(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/>/g, "&gt;")
		.replace(/</g, "&lt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&​apos;");
}

console.log(convertHTML("Schindler's List"));
