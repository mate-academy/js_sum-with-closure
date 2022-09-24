'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const add = (firstValue) => {
    return (secondValue) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
