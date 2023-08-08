'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (a) => {
    count++;

    return (b) => {
      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
