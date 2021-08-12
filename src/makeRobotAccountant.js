'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function newValue(x) {
    count++;

    return function(y) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };

  return newValue;
};

module.exports = makeRobotAccountant;
