'use strict';

function makeRobotAccountant() {
  let callCount = 0;

  return function firstCall(a) {
    return function secondCall(b) {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
