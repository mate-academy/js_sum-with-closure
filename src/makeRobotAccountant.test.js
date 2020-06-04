'use strict';

const makeRobotAccountant = require('./makeRobotAccountant');

test('The call result of makeRobotAccountant should be function', () => {
  const getSum = makeRobotAccountant();

  expect(typeof getSum)
    .toBe('function');
});

test('The call result of getSum(5)(6) should be a number', () => {
  const getSum = makeRobotAccountant();

  const actual = getSum(5)(6);

  expect(typeof actual)
    .toBe('number');
});

test('The result for the first three calls should be a number', () => {
  const getSum = makeRobotAccountant();

  const firstCall = getSum(5)(3);
  const secondCall = getSum(2)(11);
  const thirdCall = getSum(98)(45);

  expect(typeof firstCall)
    .toBe('number');

  expect(typeof secondCall)
    .toBe('number');

  expect(typeof thirdCall)
    .toBe('number');
});

test('Starting from fourth call, '
  + 'it should return error message for even calls', () => {
  const getSum = makeRobotAccountant();
  const errorMessage = 'Bzzz... Error!';

  getSum(5)(9);
  getSum(5)(6);
  getSum(11)(53);

  const actual = getSum(1)(13);

  expect(actual)
    .toBe(errorMessage);
});

test('Starting from fourth call, '
  + 'it should works only for odd calls', () => {
  const getSum = makeRobotAccountant();

  getSum(5)(9);
  getSum(5)(6);
  getSum(11)(53);
  getSum(31)(45);

  const actual = getSum(87)(11);
  const expected = 98;

  expect(actual)
    .toBe(expected);
});

test('Add two numbers: 1 + 11 = 12', () => {
  const getSum = makeRobotAccountant();

  const actual = getSum(1)(11);
  const expected = 12;

  expect(actual)
    .toBe(expected);
});

test('Add two numbers: one is negative 1 + -1 = 0', () => {
  const getSum = makeRobotAccountant();

  const actual = getSum(1)(-1);
  const expected = 0;

  expect(actual)
    .toBe(expected);
});

test('Add two numbers: both are negatives -1 + -1 = -2', () => {
  const getSum = makeRobotAccountant();

  const actual = getSum(-1)(-1);
  const expected = -2;

  expect(actual)
    .toBe(expected);
});

test('Add two numbers: one is Infinity', () => {
  const getSum = makeRobotAccountant();

  const actual = getSum(-1)(Infinity);

  expect(actual)
    .toBe(Infinity);
});

test('Add two numbers: one is Infinity, another is -Infinity', () => {
  const getSum = makeRobotAccountant();

  const actual = isNaN(getSum(Infinity)(-Infinity));

  expect(actual)
    .toBe(true);
});
