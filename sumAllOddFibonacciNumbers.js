/**
 * Sum All Odd Fibonacci Numbers
 */
function sumFibs(num) {
	let array = [1, 1];

	let sumLastTwoNumbers = () => {
		return array[array.length - 1] + array[array.length - 2];
	};
	let sumAll = () => {
		return array.filter(number => number % 2 !== 0).reduce((result, number) => result + number);
	};
	let sum = sumLastTwoNumbers();
	while (sum <= num) {
		array.push(sum);
		sum = sumLastTwoNumbers();
	}
	return sumAll();
}

console.log(sumFibs(75025));
