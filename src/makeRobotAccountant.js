'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  const func = function(first) {
    const secPar = function(sec) {
      counter++;
      return counter % 2 === 0 ? 'Bzzz... Error' : first + sec;
    }

    return secPar;
  }
  return func;
}

module.exports = makeRobotAccountant;
