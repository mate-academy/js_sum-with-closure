'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  const getSome = (num1) => {
    counter++;

    return (num2) => {
      if (counter >= 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSome;
}

module.exports = makeRobotAccountant;
