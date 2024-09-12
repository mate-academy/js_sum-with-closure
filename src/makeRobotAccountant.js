'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (xNum) => {
    return (yNum) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return xNum + yNum;
    };
  };
}

module.exports = makeRobotAccountant;
