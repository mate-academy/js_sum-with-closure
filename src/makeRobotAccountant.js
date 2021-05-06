'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const calculateFunc = function(num1) {
    counter++;

    return (num2) => {
      if (counter > 3 && (counter % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return calculateFunc;
};

module.exports = makeRobotAccountant;
