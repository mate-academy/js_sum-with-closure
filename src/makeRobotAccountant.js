'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const maxCalls = 3;
  let initialCalls = 0;

  return num1 => {
    return num2 => {
      initialCalls++;

      if ((initialCalls > maxCalls) && (initialCalls % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
