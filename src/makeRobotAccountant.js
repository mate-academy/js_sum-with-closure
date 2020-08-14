'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(first) {
    return function(second) {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return first + second;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
