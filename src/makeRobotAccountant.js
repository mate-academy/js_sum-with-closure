'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (number) => {
    count++;

    if (count <= 3) {
      return (nextNumber) => {
        return number + nextNumber;
      };
    } else {
      return (nextNumber) => {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return number + nextNumber;
        }
      };
    }
  };
}

module.exports = makeRobotAccountant;
