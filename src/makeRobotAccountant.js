'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (numOne) => {
    count++;

    if (count < 4 || count % 2 !== 0) {
      return (numTwo) => numOne + numTwo;
    }

    return () => 'Bzzz... Error!';
  };

  return sum;
}

module.exports = makeRobotAccountant;
