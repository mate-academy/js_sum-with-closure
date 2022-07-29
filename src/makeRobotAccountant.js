'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (value1) => {
    counter++;

    return (value2) => {
      if (counter < 4 || counter % 2 !== 0) {
        return value1 + value2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
