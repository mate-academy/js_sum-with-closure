'use strict';

/**
 *
 * @return {function}
 */

const makeRobotAccountant = () => {
  let callsCounter = 0;

  return number1 => {
    callsCounter++;

    return number2 => {
      if (callsCounter % 2 === 0 && callsCounter > 3) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };
};

module.exports = makeRobotAccountant;
