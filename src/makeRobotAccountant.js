'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const d = (a) => {
    count++;

    let sum = a;

    const e = (b) => {
      sum += b;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return e;
  };

  return d;
}

module.exports = makeRobotAccountant;
