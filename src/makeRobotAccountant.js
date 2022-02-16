'use strict';

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    return function(y) {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
