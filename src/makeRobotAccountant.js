'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (x) => {
    return (y) => {
      counter++;

      return counter <= 3 || counter % 2 !== 0 ? x + y : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
