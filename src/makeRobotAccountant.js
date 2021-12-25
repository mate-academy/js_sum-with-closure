'use strict';

/**
 *
 * @return {function}
 */

// Reproduce the behavior of our robots. Create a function
// `makeRobotAccountant`, the result of which is a function that
// works on the pattern `getSum (4) (5) === 9`.
// The first 3 calls to this feature work fine.
// Then all even calls return the string `Bzzz... Error!`,
// And odd calls the correct value.

function makeRobotAccountant() {
  let counter = 1;

  return (firstValue) => {
    counter++;

    return (secondValue) => {
      return (counter > 3 && counter % 2)
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
