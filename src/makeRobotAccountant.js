'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    count++;

    return function(y) {
      if (count === 4 || count === ((count % 2 === 0) && count > 4)) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      };
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
