'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (numberA) => {
    return (numberB) => {
      counter++;

      return (counter > 3 && counter % 2 === 0
        ? `Bzzz... Error!`
        : numberA + numberB);
    };
  };
}

module.exports = makeRobotAccountant;
