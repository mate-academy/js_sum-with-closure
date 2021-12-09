'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(numb1) {
    return function(numb2) {
      count++;

      if (count % 2 !== 0 || count === 2) {
        return numb1 + numb2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
