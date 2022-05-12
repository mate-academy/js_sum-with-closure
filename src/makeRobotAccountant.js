'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstCallValue => {
    counter++;

    return secondCallValue => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCallValue + secondCallValue;
    };
  };
}

module.exports = makeRobotAccountant;
