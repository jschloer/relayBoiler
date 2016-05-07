class User {
  constructor(id, name, username) {
    this.id = id;
    this.name = name;
    this.username = username;
  }
}

const users = [
  new User('1', 'Test User', 'testuser'),
];

function getUser(id) {
  return users.find((w) => w.id === id);
}

export {
  users,
  User,
  getUser,
};
