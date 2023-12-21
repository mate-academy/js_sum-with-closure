'use strict';

function makeRobotAccountant() {
  let callCount = 0;

  return function(a) {
    callCount++;

    return function(b) {
      if (callCount % 2 === 0 && callCount >= 4) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
