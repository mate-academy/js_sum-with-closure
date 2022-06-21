/* eslint-disable no-console */
'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  return (firstNum) => {
    return (secondNum) => {
      counter--;

      return counter < 0 && counter % 2 !== 0
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
