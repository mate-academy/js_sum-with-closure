'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const error = 'Bzzz... Error!';

  const fist = (firtstNum) => {
    count++;

    const second = (lastNum) => {
      if (count < 3 || count % 2 !== 0) {
        return firtstNum + lastNum;
      } else {
        return error;
      }
    };

    return second;
  };

  return fist;
}

module.exports = makeRobotAccountant;
