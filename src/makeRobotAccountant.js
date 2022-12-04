'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (x) => {
    count++;

    if (count < 4 || count % 2 !== 0) {
      return function(y) {
        return x + y;
      };
    };

    if (count >= 4 && count % 2 === 0) {
      const errorMassage = 'Bzzz... Error!';

      return function(y) {
        return errorMassage;
      };
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
