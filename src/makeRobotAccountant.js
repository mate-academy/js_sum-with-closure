'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  return (a) => {
    return (b) => {
      count--;

      return (count < 0 && count % 2 !== 0)
        ? `Bzzz... Error!`
        : a + b;
    };
  };
};

module.exports = makeRobotAccountant;
