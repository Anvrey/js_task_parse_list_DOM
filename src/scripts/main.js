'use strict';

function getEmployees() {
  const employees = [...document.querySelectorAll('li')].map((a) => ({
    name: a.textContent.trim(),
    position: a.dataset.position,
    salary: Number(a.dataset.salary.slice(1).split(',').join('')),
    age: Number(a.dataset.age),
  }));

  return employees;
}

function sortBySalary() {
  const list = document.querySelector('ul');
  const items = [...document.querySelectorAll('li')];

  items.sort(
    (a, b) =>
      Number(b.dataset.salary.slice(1).split(',').join('')) -
      Number(a.dataset.salary.slice(1).split(',').join('')),
  );
  list.append(...items);
}

sortBySalary();
