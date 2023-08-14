'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstCallNumber) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (secondCallNumber) => {
      return firstCallNumber + secondCallNumber;
    };
  };
}

module.exports = makeRobotAccountant;
