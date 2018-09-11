/**
 * Intermediate Algorithm Scripting: Pig Latin
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to
 * the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
	let pigLatinCopy = "";
	let vows = ["a", "e", "i", "o", "u"];

	let firstVowIndex = str.split("").findIndex((letter, index) => {
		return vows.includes(letter);
	});

	if (firstVowIndex === 0) return str + "way";

	if (firstVowIndex > 0) return str.slice(firstVowIndex) + str.slice(0, firstVowIndex) + "ay";

	if (firstVowIndex === -1) return str + "ay";
}
