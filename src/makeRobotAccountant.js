'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let result;

  return (value1) => {
    count++;

    return (value2) => {
      (count > 3 && count % 2 === 0)
        ? (result = 'Bzzz... Error!') : (result = value1 + value2);

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
