'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let sum = 0;
  let counter = 0;

  return (a = 0) => {
    sum += a;

    return (b = 0) => {
      sum += b;
      counter += 1;

      if (counter > 3 && (counter % 2) === 0) {
        sum = 0;

        return 'Bzzz... Error!';
      } else {
        const res = sum;

        sum = 0;

        return res;
      }
    };
  };
}

module.exports = makeRobotAccountant;
