"use strict";
import users from "./users.js";
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const userGender = users.filter(user => user.gender === gender);
  return userGender.map(user => user.name);
};

console.log(getUsersWithGender(users, "male"));
