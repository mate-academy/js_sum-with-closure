'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let errorCounter = 0;

  return (a) => (b) => {
    errorCounter++;

    if (errorCounter > 3 && errorCounter % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
