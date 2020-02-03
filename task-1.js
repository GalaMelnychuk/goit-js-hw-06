"use strict";
import users from "./users.js";
// Напиши функции которые с помощью перебирающих методов массива (никаких for, splice и т. д.) выполняют следующие операции над массивом объектов пользователей из файла users.js.

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
