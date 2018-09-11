/**
 * Intermediate Algorithm Scripting: Wherefore art thou
 *
 * Make a function that looks through an array of objects (first argument) and returns an array
 * of all objects that have matching name and value pairs (second argument). Each name and value
 * pair of the source object has to be present in the object from the collection if it is to be
 * included in the returned array.
 */

/**
 *
 * @param {Array} collection
 * @param {Object} source
 */
function whatIsInAName(collection, source) {
	if (typeof source !== "object") return;
	return collection.filter(item => {
		return Object.keys(source).every(key => {
			return item.hasOwnProperty(key) && item[key] === source[key];
		});
	});
}

/**
 * lesson learnt:
 * 1. property in object is used to detect if the object has that property
 * can also use object.hasOwnProperty(property) to do the same thing.
 *
 * 2. The every() method tests whether ALL elements in the array pass the test implemented by the provided
 * function.
 *
 * This could be very useful when we want to test if EVERY element meets the conditions.
 */
