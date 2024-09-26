'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (num) => {
    count++;

    const workWithTemplate = (num2) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return num2 + num;
    };

    return workWithTemplate;
  };

  return sum;
}

module.exports = makeRobotAccountant;
