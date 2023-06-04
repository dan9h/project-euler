/**
 * Gets the sum of all the multiples of 3 or 5 below a given number.
 * @param {Number} number
 * @returns {Number}
 */
function multiplesOf3Or5(number) {
  /**
   * Gets the sum of all the multiples of n.
   * @param {Number} n
   * @returns {Number}
   */
  function multiplesOf(n) {
    const multiples = Math.floor((number - 1) / n);

    return ((multiples * (multiples + 1)) / 2) * n;
  }

  return multiplesOf(3) + multiplesOf(5) - multiplesOf(15);
}

multiplesOf3Or5(10); // => 23
multiplesOf3Or5(1000); // => 233168
