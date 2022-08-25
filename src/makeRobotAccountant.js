'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let limit = 0;

  return (firstNum) => {
    limit++;

    return ((limit > 3 && limit % 2 === 0))
      ? () => 'Bzzz... Error!'
      : (secondNum) => {
        return firstNum + secondNum;
      };
  };
}

module.exports = makeRobotAccountant;
