'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(firstArg) {
    count++;

    return (count % 2 === 0 && count > 3)
      ? () => 'Bzzz... Error!'
      : (secondArg) => firstArg + secondArg;
  };
}
module.exports = makeRobotAccountant;
