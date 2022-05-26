'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value1) => {
    counter++;

    return (value2) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return value1 + value2;
    };
  };
}

module.exports = makeRobotAccountant;
