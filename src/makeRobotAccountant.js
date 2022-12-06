'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (x) => {
    count++;

    return (y) => {
      return (count <= 2 || count % 2) ? x + y : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
