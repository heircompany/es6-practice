// summing arrays with reduce
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5]);

// what about not as an array?
function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// rest operator with reduce
// passing in as many arguments as I want over time
// total arguments are unknown but still accepted
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([]);
