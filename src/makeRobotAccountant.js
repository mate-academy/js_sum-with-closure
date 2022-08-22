'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let limit = 0;

  return (firstNum) => {
    const sum = firstNum;

    limit++;

    return ((limit > 3 && limit % 2 === 0))
      ? () => 'Bzzz... Error!'
      : (secondNum) => {
        return sum + secondNum;
      };
  };
}

module.exports = makeRobotAccountant;
