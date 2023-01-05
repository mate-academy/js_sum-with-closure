'use strict';

function makeRobotAccountant() {
  let count = 0;

  return function getSum(a) {
    return function(b) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
