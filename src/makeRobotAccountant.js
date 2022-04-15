'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robot = (arg1) => {
    count++;

    const robot2 = (arg2) => {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return arg1 + arg2;
    };

    return robot2;
  };

  return robot;
}

module.exports = makeRobotAccountant;
