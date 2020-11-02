'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numOfCalls_ = 0;
  const errorMessage_ = 'Bzzz... Error!';

  const getSum_ = (param1) => {
    numOfCalls_++;

    return function(param2) {
      if ((numOfCalls_ % 2) > 0 || numOfCalls_ <= 3) {
        return param1 + param2;
      }

      return errorMessage_;
    };
  };

  return getSum_;
}

module.exports = makeRobotAccountant;
