'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = -1;

  return (arg1) => {
    count++;

    return (arg2) => {
      if (count < 3 || count % 2 === 0) {
        return arg1 + arg2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
