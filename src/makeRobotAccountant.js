'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (number1) => {
    counter++;

    return (number2) => {
      const evenCondition = (counter % 2 === 0);

      if (counter > 3 && evenCondition) {
        return 'Bzzz... Error!';
      }

      const summary = number1 + number2;

      return summary;
    };
  };
}

module.exports = makeRobotAccountant;
