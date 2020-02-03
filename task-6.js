"use strict";
import users from "./users.js";
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max)
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));