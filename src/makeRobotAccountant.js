'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getFirstArgument = (arg1) => {
    const getSum = (arg2) => {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return arg1 + arg2;
      }

      return 'Bzzz... Error!';
    };

    return getSum;
  };

  return getFirstArgument;
}

module.exports = makeRobotAccountant;
