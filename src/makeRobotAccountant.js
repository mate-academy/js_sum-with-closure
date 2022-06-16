'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 1;

  return (parameter1) => {
    return (parameter2) => {
      countCalls += 1;

      if (countCalls % 2 !== 0 && countCalls > 3) {
        return 'Bzzz... Error!';
      }

      return parameter1 + parameter2;
    };
  };
}

module.exports = makeRobotAccountant;
