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
      const sum = firstNum + secondNum;

      if (counter > 3) {
        if (counter % 2 === 0) {
          return 'Bzzz... Error!';
        }
      }

      return sum;
    };
  };
};

module.exports = makeRobotAccountant;
