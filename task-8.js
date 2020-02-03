"use strict";
import users from "./users.js";
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const userInclud = users.filter(user => user.friends.includes(friendName));
  return userInclud.map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
