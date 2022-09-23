'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let oddReturn = 0;

  return (num1) => {
    oddReturn++;

    return (num2) => {
      if (oddReturn > 3 && oddReturn % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
};

module.exports = makeRobotAccountant;
