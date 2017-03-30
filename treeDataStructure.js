class Messages {
  constructor(user, friend, message, timestamp, children) {
    this.user = user;
    this.friend = friend;
    this.message = message;
    this.timestamp = timestamp;
    this.children = children;
  }
  * [Symbol.iterator]() {
    yield this.user;
    yield this.friend;
    yield this.message;
    yield this.timestamp;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Messages(`slack`, [] ),
  new Messages(`facebook`, [] ),
  new Messages(`teams`, [] ),
  new Messages(`sms`, [] ),
  new Messages(`google`, [] ),
];

const tree = new Messages(`chat`, children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;
