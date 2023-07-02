'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return function(y) {
      return x + y;
    };
  }

  const getValue = (x) => (y) => {
    count++;

    if (count >= 3 && count % 2 === 0) {
      return `Bzzz... Error!`;
    } else {
      return getSum(x)(y);
    }
  };

  return getValue;
}

module.exports = makeRobotAccountant;
