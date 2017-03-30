// asynchronous code !
// working with AJAX requests, HTTP, PubSub
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 5000); // wait 5 seconds before timing out
  // or reject();
});

promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest()
  //make request
  request.onload = () => {
    resolve();
  };
});

//best syntax
promise
      .then(() => console.log('this worked'!))
      .then(() => console.log('i also worked!'))
      .catch(() =>console.log('this failed yo'))

// fetch in practice
url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(response => response.json());
  .then(data => console.log(data));
  //catch only triggers from fetch if the network cannot find the requested domain
  .catch(error => console.log('this failed yo', error));

  // axios is better...??? says this guy lol
