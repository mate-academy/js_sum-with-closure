'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNum) => {
    counter++;

    return (secondNum) => {
      if (counter < 4 || counter % 2 !== 0) {
        return firstNum + secondNum;
      }

      return `Bzzz... Error!`;
    };
  };
}

module.exports = makeRobotAccountant;
