'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (value1) => {
    return (value2) => {
      if (calls < 3) {
        calls++;

        return value1 + value2;
      }

      if (calls % 2 === 0) {
        calls++;

        return value1 + value2;
      }

      calls++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
