'use strict';

const makeRobotAccountant = require('./makeRobotAccountant');

test('The call result of makeRobotAccountant should be function', () => {
  const getSum = makeRobotAccountant();

  expect(typeof getSum)
    .toBe('function');
});
