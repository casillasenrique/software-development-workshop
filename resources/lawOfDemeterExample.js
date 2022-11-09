const person = {
  firstName: 'Foo',
  lastName: 'Bar',
  age: 30,
};

let result;

// ------------start----------------
// Does NOT follow Law of Demeter
// (no need to pass in entire person object to function)
const isOver21 = (person) => {
  return person.age >= 21;
};

result = isOver21(person);
console.log(result);
// --------------end----------------

// ------------start----------------
// Follows Law of Demeter
const isLegalAge = (age) => {
  return age >= 21;
};

result = isLegalAge(person.age);
console.log(result);
// --------------end----------------
