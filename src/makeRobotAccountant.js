'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  let isError = true;

  const add = (a) => {
    const sum = (b) => {
      if (count === 4) {
        isError = false;
        count++;

        return 'Bzzz... Error!';
      }

      if (count > 4 && isError) {
        isError = false;

        return 'Bzzz... Error!';
      }

      count++;
      isError = true;

      return a + b;
    };

    return sum;
  };

  return add;
}

module.exports = makeRobotAccountant;
