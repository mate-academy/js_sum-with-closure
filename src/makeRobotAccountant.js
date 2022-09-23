'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = -3;

  const firstInteger = (x) => {
    const secondInteger = (y) => {
      if (counter >= 0 && counter % 2 === 0) {
        counter++;

        return 'Bzzz... Error!';
      }

      counter++;

      return x + y;
    };

    return secondInteger;
  };

  return firstInteger;
}

module.exports = makeRobotAccountant;
