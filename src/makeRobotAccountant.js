'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (number) => {
    counter++;

    return (number1) => {
      if (counter % 2 === 0 && counter >= 3) {
        return 'Bzzz... Error!';
      } else {
        return number + number1;
      }
    };
  };
}

module.exports = makeRobotAccountant;
