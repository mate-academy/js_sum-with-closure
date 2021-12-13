'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const error = 'Bzzz... Error!';

  return (number) => {
    let num = 0;

    num += number;

    if (count < 4) {
      return (value) => {
        count++;

        return num + value;
      };
    }

    if (count % 2 === 0) {
      return (value) => {
        num += value;
        count++;

        return error;
      };
    } else {
      return (value) => {
        count++;

        return num + value;
      };
    }
  };
}
module.exports = makeRobotAccountant;
