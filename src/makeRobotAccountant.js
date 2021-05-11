'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (argOne) => {
    count++;

    return (argTwo) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return argOne + argTwo;
      }
    };
  };
}

module.exports = makeRobotAccountant;
