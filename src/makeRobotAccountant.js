'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCalls = 0;

  const addCall = (first) => {
    counterOfCalls++;

    return (second) => (counterOfCalls < 4 || counterOfCalls % 2)
      ? first + second
      : 'Bzzz... Error!';
  };

  return addCall;
}

module.exports = makeRobotAccountant;
