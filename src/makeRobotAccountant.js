'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let iterator = 0;

  const adder = (firstArgument) => {
    let sum = firstArgument;

    const added = (secondArgument) => {
      sum += secondArgument;
      iterator++;

      if (iterator > 3 && iterator % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return added;
  };

  return adder;
}

module.exports = makeRobotAccountant;
