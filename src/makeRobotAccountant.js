'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (num) => {
    counter++;

    return (secondNum) => {
      if (counter <= 3 || counter % 2 !== 0) {
        return num + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
