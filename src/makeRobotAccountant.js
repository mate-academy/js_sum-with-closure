'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNum) => {
    counter++;

    let num = firstNum;

    return (secondNum) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      num += secondNum;

      return num;
    };
  };
}

module.exports = makeRobotAccountant;
