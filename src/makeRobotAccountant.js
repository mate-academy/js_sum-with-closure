'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let num = 0;

  const f = (x) => {
    const result = (y) => {
      num++;

      if (num <= 3 || num % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };

    return result;
  };

  return f;
}

module.exports = makeRobotAccountant;
