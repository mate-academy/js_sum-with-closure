'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {

  let count = 0;

  return (a = 0) => {
    return (b = 0) => {
      count++;

      const errorCode = count > 3 && count % 2 === 0;

      return errorCode ? 'Bzzz... Error!' : a + b;
    };
  };
}
module.exports = makeRobotAccountant;
