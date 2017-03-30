//ajax request to URL that defaults to GET when no method is provided
function makeAjaxRequest(url, method = "GET") {
  if (!method) {
    method = "GET";
  }

  //request method logic
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");
// no value to avoid default, use intentionally
makeAjaxRequest("google.com", null);


//web app that creates user object
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

//default function argument makes this process much more flexible
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser(user);
