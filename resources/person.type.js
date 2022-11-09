/**
 * @typedef Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 * @property {string} homeState
 * @property {boolean} isCitizen
 * @property {boolean} isIncarcerated
 */

/**
 * @type {Person}
 */
const massachusettsResident = {
  firstName: 'Foo',
  lastName: 'Bar',
  age: 30,
  homeState: 'Massachusetts',
  isCitizen: true,
  isIncarcerated: false,
};

/**
 * @type {Person}
 */
const virginiaResident = {
  firstName: 'Baz',
  lastName: 'Bar',
  age: 25,
  homeState: 'Virginia',
  isCitizen: true,
  isIncarcerated: false,
};

module.exports = { massachusettsResident, virginiaResident };
