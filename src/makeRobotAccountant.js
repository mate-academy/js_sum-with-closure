'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const getSum = function(first) {
    const value = first;

    return (toAdd) => {
      if (count <= 3 || count % 2 !== 0) {
        count++;

        return value + toAdd;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
