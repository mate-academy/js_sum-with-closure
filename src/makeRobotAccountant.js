'use strict';

/**
 *
 * @return {function}
 */
const FREE_REPETITION_LIMIT = 3;
const ERROR_MESSAGE = 'Bzzz... Error!';

function makeRobotAccountant() {
  let counter = 0;

  return (arg1) => {
    counter++;

    return (arg2) => {
      if (!(counter % 2) && counter > FREE_REPETITION_LIMIT) {
        return ERROR_MESSAGE;
      }

      return arg1 + arg2;
    };
  };
}

module.exports = makeRobotAccountant;
