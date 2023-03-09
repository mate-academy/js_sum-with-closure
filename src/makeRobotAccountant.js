'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const message = 'Bzzz... Error!';

  const sum = (a) => {
    const sum1 = (b) => {
      const add = a + b;

      if (count > 3 && count % 2 === 0) {
        return message;
      } else {
        return add;
      }
    };

    count++;

    return sum1;
  };

  return sum;
}

module.exports = makeRobotAccountant;
