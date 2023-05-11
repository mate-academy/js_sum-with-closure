'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const errorCheck = (firstNumber) => {
    counter++;

    return function(seconNumber) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return firstNumber + seconNumber;
    };
  };

  return errorCheck;
}

module.exports = makeRobotAccountant;
