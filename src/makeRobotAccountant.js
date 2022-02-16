'use strict';

function makeRobotAccountant() {
  let count = 0;

  count++;

  return function(x) {
    return function(y) {
      if (count >= 4 && count % 2 === 0) {
        count++;

        return 'Bzzz... Error!';
      } else {
        count++;

        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
