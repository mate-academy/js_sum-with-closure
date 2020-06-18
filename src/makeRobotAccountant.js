'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstPar) => {
    return (secondPar) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const sum = firstPar + secondPar;

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
