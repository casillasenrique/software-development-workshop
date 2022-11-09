import { Person } from './person.type';

/**
 * Determines whether or not a person can vote in Massachusetts.
 *
 * Demonstrates arrow code
 *
 * @param {Person} person - The person to test
 * @returns {boolean} True if the person can vote, false otherwise
 */
const canVoteArrowCode = (person) => {
  if (person.isCitizen) {
    if (person.homeState === 'Massachusetts') {
      if (person.age >= 18) {
        if (!person.isIncarcerated) {
          console.log('Can vote!');
          return true;
        } else {
          console.log('Is incarcerated');
          return false;
        }
      } else {
        console.log('Is not over 18 years old');
        return false;
      }
    } else {
      console.log('Does not live in MA');
      return false;
    }
  } else {
    console.log('Is not a citizen');
    return false;
  }
};

/**
 * Determines whether or not a person can vote in Massachusetts.
 *
 * Demonstrates a less cluttered way to write conditionals with guard clauses
 *
 * @param {Person} person - The person to test
 * @returns {boolean} True if the person can vote, false otherwise
 */
const canVoteNoArrowCode = (person) => {
  // Guard clause
  if (!person.isCitizen) {
    console.log('Is not a citizen');
    return false;
  }

  if (person.homeState !== 'Massachusetts') {
    console.log('Does not live in MA');
    return false;
  }

  if (person.age < 18) {
    console.log('Is not over 18 years old');
    return false;
  }

  if (person.isIncarcerated) {
    console.log('Is incarcerated');
    return false;
  }

  console.log('Can vote!');
  return true;
};

module.exports = { canVoteArrowCode, canVoteNoArrowCode };
