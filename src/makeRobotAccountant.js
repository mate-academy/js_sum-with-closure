'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = (arg1) => {
    count++;

    return (arg2) => {
      if (count <= 3) {
        return arg1 + arg2;
      }

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return arg1 + arg2;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
