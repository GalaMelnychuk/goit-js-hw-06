"use strict";
import users from "./users.js";

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users));
