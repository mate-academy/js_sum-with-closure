'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return numberA => numberB => {
    count++;

    if (count % 2 === 0 || count <= 3) {
      return numberA + numberB;
    }

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
