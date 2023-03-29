'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (num) => {
    return (num2) => {
      if (counter < 3 || (counter >= 3 && counter % 2 !== 0)) {
        counter++;

        return num + num2;
      }
      counter++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
