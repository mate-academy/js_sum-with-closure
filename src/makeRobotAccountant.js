'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let errorCounter = 3;

  const robot = (firstValue) => {
    return (secondVlue) => {
      if (errorCounter === 0) {
        errorCounter++;

        return 'Bzzz... Error!';
      }

      errorCounter--;

      return firstValue + secondVlue;
    };
  };

  return robot;
}

module.exports = makeRobotAccountant;
