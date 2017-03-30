//aka template literals
function getMessage() {
  const year = new Date().getFullYear();
  return "the current year is " + year;
}
getMessage();

//new way: backticks instead of quotes, $ passes in JS expressions
function getMessage() {
  const year = new Date().getFullYear();
  return `the current year is ${year}`;
}
getMessage();

//upload es5
const data = '{"device_id":"'device_id + '","guid":"' + guid + '"username":"' + username '}';

//upload es6
const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}" }`;
