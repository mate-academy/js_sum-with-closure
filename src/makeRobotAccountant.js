'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstValue) => {
    count++;

    return (secondValue) => {
      if (count <= 3 || count % 2 !== 0) {
        return firstValue + secondValue;
      }

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
