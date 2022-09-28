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

    return (second) => {
      const shouldWeSum = count < 3 || count % 2 === 1;

      return shouldWeSum ? first + second : `Bzzz... Error!`;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
