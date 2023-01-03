'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value) => {
    counter++;

    return (b) => {
      if (counter <= 3 || counter % 2 !== 0) {
        return value + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
