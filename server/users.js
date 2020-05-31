const users = [];

function addUser({ id, name, room }) {
  name = name.trim();
  room = room.trim();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is taken. Try again!" };
  }

  const user = { id, name, room };
  console.log(user.id);

  users.push(user);
  return { user };
}

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function getUsersInRoom(room) {
  users.filter((user) => user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
