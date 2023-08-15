'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const EROR_MESSAGE = 'Bzzz... Error!';
  const maxCorectCountCall = 3;

  return (x) => {
    callCount++;

    return (y) => callCount % 2 === 0 && callCount > maxCorectCountCall
      ? EROR_MESSAGE
      : x + y;
  };
}

module.exports = makeRobotAccountant;
