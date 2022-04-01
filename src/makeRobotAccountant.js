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
      return (counter % 2 === 1 || counter === 2)
        ? firstNum + secondNum : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
