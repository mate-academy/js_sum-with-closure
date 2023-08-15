'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (num1) => {
    const messageOrNum = counter > 3 && counter % 2 === 0
      ? message => 'Bzzz... Error!'
      : num2 => num1 + num2;

    counter++;

    return messageOrNum;
  };
}

module.exports = makeRobotAccountant;
