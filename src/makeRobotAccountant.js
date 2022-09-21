'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value1) => {
    return (value2) => {
      if (counter === 3) {
        counter--;

        return 'Bzzz... Error!';
      }
      counter = counter + 1;

      return value1 + value2;
    };
  };
}

module.exports = makeRobotAccountant;
