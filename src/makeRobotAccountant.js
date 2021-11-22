'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = a => {
    return b => {
      counter++;

      return (counter <= 3 || counter % 2 !== 0)
        ? a + b
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
