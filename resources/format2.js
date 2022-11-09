/**
 * Sample function.
 *
 * Returns 1 if x is bar. Otherwise, prints out a message and returns 2.
 *
 * @param {string} x - The value to test
 * @returns {number} The result (1 or 2)
 */
const foo = (x) => {
  let result = 2;
  if (x === 'bar') {
    result = 1;
  }

  if (result === 2) {
    console.log('Was not bar');
  }

  return result;
};

console.log(foo('baz'));
