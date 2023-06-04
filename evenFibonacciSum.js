/**
 * Gets the sum of all the even-valued terms not exceeding the given number.
 * @param {Number} number
 * @returns {Number}
 */
function evenFibonacciSum(number) {
  if (number < 2) return 0;

  let [a, b] = [1, 2];
  let sum = b;

  /**
   * Checks if the number is even.
   * @param {Number} int
   * @returns {Boolean}
   */
  function isEven(int) {
    return int % 2 === 0;
  }

  while (b < number) {
    /** swap values of a and b */
    [a, b] = [b, a + b];

    if (isEven(b)) sum += b;
  }

  return sum;
}

evenFibonacciSum(100); // => 188
evenFibonacciSum(4000000); // => 4613732
