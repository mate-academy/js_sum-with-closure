'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let errorCounter = 3;

  const robot = (a) => {
    return (b) => {
      if (errorCounter === 0) {
        errorCounter++;

        return 'Bzzz... Error!';
      }

      errorCounter--;

      return a + b;
    };
  };

  return robot;
}

module.exports = makeRobotAccountant;
