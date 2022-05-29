'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const func = (firstNum) => {
    count++;

    return (secondNum) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };

  return func;
}

module.exports = makeRobotAccountant;
