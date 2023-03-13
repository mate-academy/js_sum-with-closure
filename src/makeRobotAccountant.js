'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const getSum = (a) => {
    const sum = (b) => {
      // console.log('*count - ', count)
      if (count <= 3 || count % 2 !== 0) {
        count++;

        return a + b;
      }
      count++;

      return 'Bzzz... Error!';
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
