'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfUses = 0;

  return (numberA) => (numberB) => {
    if (countOfUses === 3) {
      countOfUses--;

      return `Bzzz... Error!`;
    } else {
      countOfUses++;

      return numberA + numberB;
    }
  };
}

module.exports = makeRobotAccountant;
