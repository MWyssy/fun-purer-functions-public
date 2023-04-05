/*
This function should take as its arguments:

- an array representing a list of employees and a number (representing a percentage increase)
- each employee will be represented as an object with a `name` and a `salary` property

It should return a new array of employees with their salary now increased by the given percentage increase. 
The new salaries should be rounded up to the nearest integer. None of the original employee objects should 
be mutated.

raiseSalaries(
  [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 2000 },
    { name: "Vel", salary: 4500 },
  ],
  10
);
 
should return 
[{ name: 'Alice', salary: 3300 },
 { name: 'Bob', salary: 2200 }, 
 { name: 'Vel', salary: 4950 }
]

*/

function raiseSalaries(employees, percentageIncrease) {
    const increaseCalc = ((percentageIncrease / 100) + 1); 

    const copyEmployees = employees.map((employee) => {
        const copyEmployee = {...employee};
        copyEmployee['salary'] *= increaseCalc;
        copyEmployee['salary'] = Math.floor(copyEmployee['salary']);
        return copyEmployee;
    })

    return copyEmployees
};

module.exports = raiseSalaries;