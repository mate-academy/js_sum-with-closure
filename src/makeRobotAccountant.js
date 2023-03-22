'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(x) {
    counter++;

    return (y) => {
      if (counter < 4) {
        return x + y;
      } else {
        return counter % 2 ? x + y : 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
