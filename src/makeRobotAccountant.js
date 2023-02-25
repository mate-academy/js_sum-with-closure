'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callNumber = 0;

  return function(firstCallValue) {
    return function(secondCallValue) {
      callNumber++;

      if (callNumber > 3 && callNumber % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCallValue + secondCallValue;
    };
  };
}

module.exports = makeRobotAccountant;
