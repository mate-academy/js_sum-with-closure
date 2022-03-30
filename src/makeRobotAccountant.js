'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNum) => {
    counter++;

    return (secondNum) => {
      return (counter <= 3 || (counter >= 4 && counter % 2 !== 0))
        ? firstNum + secondNum : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
