const raiseSalaries = require('../raiseSalaries');

describe('raiseSalaries tests', () => {
    test('returns an empty array if passed an empty array', () => {
      //Arrange
      const employeesArray = [];
      const expectedOutput = [];
      //Act
      const output = raiseSalaries(employeesArray);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new empty array if passed an empty array', () => {
        //Arrange
        const employeesArray = [];
        const expectedOutput = [];
        //Act
        const output = raiseSalaries(employeesArray);
        //Assert
        expect(output).not.toBe(employeesArray);
      });
      test('returns a new array with the employees salary increased by the percentageIncrease, if just one employee is present', () => {
        //Arrange
        const employeesArray = [
            { name: "Alice", salary: 3000 } 
        ];
        const percentageIncrease = 10;
        const expectedOutput = [
            { name: 'Alice', salary: 3300 }
        ];
        //Act
        const output = raiseSalaries(employeesArray, percentageIncrease);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('returns a new array with the employees salary increased by the percentageIncrease, for multiple employees', () => {
        //Arrange
        const employeesArray = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 } 
        ];
        const percentageIncrease = 10;
        const expectedOutput = [
            { name: 'Alice', salary: 3300 },
            { name: 'Bob', salary: 2200 }, 
            { name: 'Vel', salary: 4950 }
        ];
        //Act
        const output = raiseSalaries(employeesArray, percentageIncrease);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('does not mutate the original input', () => {
        //Arrange
        const employeesArray = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 } 
        ];
        const copyEmployeesArray = [...employeesArray].map((employee) => {
            const copyEmployee = {...employee};
            return copyEmployee;
        });
        //Act
        raiseSalaries(employeesArray);
        //Assert
        expect(employeesArray).toEqual(copyEmployeesArray);
      });
  });