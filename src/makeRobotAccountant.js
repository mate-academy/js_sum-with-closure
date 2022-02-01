'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return number => {
    return anotherNumber => {
      calls++;

      return (calls > 3 && calls % 2 === 0)
        ? 'Bzzz... Error!'
        : number + anotherNumber;
    };
  };
}

module.exports = makeRobotAccountant;
