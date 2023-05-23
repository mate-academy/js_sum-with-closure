'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => {
    return (b) => {
      if (counter >= 3 && counter % 2 !== 0) {
        counter++;

        return 'Bzzz... Error!';
      };

      counter++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
