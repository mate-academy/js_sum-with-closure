'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOperation = 0;

  return (numberOne) => {
    return (numberTwo) => {
      countOperation++;

      if (countOperation <= 3 || countOperation % 2 !== 0) {
        return numberOne + numberTwo;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
