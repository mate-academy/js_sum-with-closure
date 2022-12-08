'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstCallsValue) => {
    return (secondCallsValue) => {
      counter += 1;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCallsValue + secondCallsValue;
    };
  };
}

module.exports = makeRobotAccountant;
