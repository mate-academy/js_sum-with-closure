'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCalls = 0;
  const maxCall = 4;

  const addCall = (first) => {
    counterOfCalls++;

    return (second) => (counterOfCalls < maxCall || counterOfCalls % 2)
      ? first + second
      : 'Bzzz... Error!';
  };

  return addCall;
}

module.exports = makeRobotAccountant;
