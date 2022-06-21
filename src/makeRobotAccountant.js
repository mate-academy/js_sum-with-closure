'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let funcCall = 0;

  return function(firstN) {
    funcCall++;

    return function(secondN) {
      return funcCall > 3 && funcCall % 2 === 0
        ? 'Bzzz... Error!'
        : firstN + secondN;
    };
  };
}
module.exports = makeRobotAccountant;
