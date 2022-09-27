'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  const add = (first) => {
    count++;

    if (count < 3 || count % 2 === 1) {
      return (second) => {
        return first + second;
      };
    }

    return () => `Bzzz... Error!`;
  };

  return add;
}

module.exports = makeRobotAccountant;
