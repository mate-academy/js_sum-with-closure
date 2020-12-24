'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numA) => {
    return (numB) => {
      count++;

      const result = numA + numB;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
