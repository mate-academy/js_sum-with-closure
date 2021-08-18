'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let counter = 0;

  return function getSum(x) {
    counter++;

    if (counter % 2 !== 0 || counter <= 3) {
      return function(y) {
        return x + y;
      };
    }

    return function() {
      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
