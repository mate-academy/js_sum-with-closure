'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (callFirst) => {
    callCounter++;

    return (callSecond) => {
      const add = callFirst + callSecond;
      const errormessage = 'Bzzz... Error!';
      const expression = (callCounter > 3 && callCounter % 2 === 0);

      return expression ? errormessage : add;
    };
  };
}

module.exports = makeRobotAccountant;
