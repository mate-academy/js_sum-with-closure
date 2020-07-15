'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(count = 0) {
  let counter = count;

  return (firstNumber) => {
    counter++;

    return (secondNumder) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumder;
      }
    };
  };
}

module.exports = makeRobotAccountant;
