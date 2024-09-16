'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (value) => {
    count++;

    return (item) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return value + item;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
