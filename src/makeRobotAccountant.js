'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let getCallCounter = 0;

  return (fistValue) => {
    return (secondValue) => {
      getCallCounter++;

      if (getCallCounter >= 3 && getCallCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return fistValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
