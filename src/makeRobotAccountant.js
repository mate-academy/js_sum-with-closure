'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const funFirst = first => {
    const funSecond = second => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };

    return funSecond;
  };

  return funFirst;
}

module.exports = makeRobotAccountant;
