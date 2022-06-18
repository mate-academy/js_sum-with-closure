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

      const condition = counter < 0 && counter % 2 !== 0;

      return condition
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
