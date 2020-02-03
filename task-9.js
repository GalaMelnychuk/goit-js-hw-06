"use strict";
import users from "./users.js";

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const userCountFriend = (a, b) => a.friends.length - b.friends.length;
  users.sort(userCountFriend);
  return users.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
