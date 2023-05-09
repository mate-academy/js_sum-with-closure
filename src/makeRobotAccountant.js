'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  
  const sum = (x) => {
    const secondVal = (y) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return secondVal;
  };

  return sum;
}

module.exports = makeRobotAccountant;
