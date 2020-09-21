'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (num1) => {
    return (num2) => {
      if (counter === 3 || (counter > 3 && counter % 2 !== 0)) {
        counter++;

        return 'Bzzz... Error!';
      }
      counter++;

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
