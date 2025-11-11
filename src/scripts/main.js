'use strict';

const list = document.querySelector('ul');

function toSalary(value) {
  return Number(value.slice(1).split(',').join(''));
}

function getEmployees(list) {
  const employees = [...list.querySelectorAll('li')].map((a) => ({
    name: a.textContent.trim(),
    position: a.dataset.position,
    salary: toSalary(a.dataset.salary),
    age: Number(a.dataset.age),
  }));

  return employees;
}

function sortList(list) {
  const items = [...document.querySelectorAll('li')];

  items.sort(
    (a, b) =>
      Number(b.dataset.salary.slice(1).split(',').join('')) -
      Number(a.dataset.salary.slice(1).split(',').join('')),
  );
  list.append(...items);
}

sortList(list);
getEmployees(list);
