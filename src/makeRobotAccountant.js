'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numberOne) => {
    return (numberTwo) => {
      count++;

      if (count <= 3 || count % 2 === 1) {
        return numberOne + numberTwo;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
