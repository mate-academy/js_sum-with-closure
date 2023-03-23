'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstValue) {
    return function(secondValue) {
      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? `Bzzz... Error!`
        : Number(firstValue) + Number(secondValue);
    };
  };
}

module.exports = makeRobotAccountant;
