'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      switch (true) {
        case count <= 3:
          count++;

          return firstNumber + secondNumber;
        case count % 2 === 0:
          count++;

          return 'Bzzz... Error!';
        case count % 2 === 1:
          count++;

          return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
