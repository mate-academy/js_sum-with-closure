'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = -1;

  const robot = (arg1) => {
    count++;

    const robot2 = (arg2) => {
      if (count <= 2) {
        return arg1 + arg2;
      }

      if (count > 2 && count % 2 !== 0) {
        return `Bzzz... Error!`;
      }

      return arg1 + arg2;
    };

    return robot2;
  };

  return robot;
}

module.exports = makeRobotAccountant;
