'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccallsCounterant() {
  let callsCounter = 0;

  const add = (numberA) => {
    callsCounter++;

    return (numberB) => {
      return callsCounter > 3 && callsCounter % 2 === 0
        ? 'Bzzz... Error!'
        : numberA + numberB;
    };
  };

  return add;
}

module.exports = makeRobotAccallsCounterant;
