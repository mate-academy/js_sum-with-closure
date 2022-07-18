'use strict';

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    let sum = x;

    count++;

    return function(y) {
      sum += y;

      return count < 3 || count % 2 !== 0
        ? sum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
