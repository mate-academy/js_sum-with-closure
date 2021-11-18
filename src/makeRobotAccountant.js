'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const accountantData = {
    callsNum: 0,
    num: null,
  };

  const accountant = (num) => {
    if (accountantData.num === null) {
      accountantData.callsNum++;
      accountantData.num = num;

      return accountant;
    }

    const sum = num + accountantData.num;

    accountantData.num = null;

    if (accountantData.callsNum < 3 || accountantData.callsNum % 2 !== 0) {
      return sum;
    }

    return 'Bzzz... Error!';
  };

  return accountant;
}

module.exports = makeRobotAccountant;
