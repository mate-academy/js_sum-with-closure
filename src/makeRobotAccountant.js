'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstParam) => {
    return (secondParam) => {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return firstParam + secondParam;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
