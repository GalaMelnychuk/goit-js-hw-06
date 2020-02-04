"use strict";
import users from "./users.js";

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

  const unic = skills.filter((skl, idx, array) => {
    return array.indexOf(skl) === idx;
  })
  
 return (unic.sort())
};

console.log(getSortedUniqueSkills(users));
