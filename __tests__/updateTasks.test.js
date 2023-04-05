const updateTasks = require('../updateTasks');

describe('updateTasks tests', () => {
    test('returns an empty object if passed an empty object', () => {
      //Arrange
      const person = {};
      const expectedOutput = {};
      //Act
      const output = updateTasks(person);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new empty object if passed an empty object', () => {
        //Arrange
        const person = {};
        const expectedOutput = {};
        //Act
        const output = updateTasks(person);
        //Assert
        expect(output).not.toBe(person);
      });
      test('returns a copy of person in a new object, with the task added, if one new task is passed', () => {
        //Arrange
        const person = {
            name: 'Mike',
            tasks: ['Eat', 'Sleep', 'Look after children']
        };
        const expectedOutput = {
            name: 'Mike',
            tasks: ['Eat', 'Sleep', 'Look after children', 'Code!']
        };
        //Act
        const output = updateTasks(person, 'Code!');
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('returns a copy of person in a new object, with multiple tasks added, if more than one new task is passed', () => {
        //Arrange
        const person = {
            name: 'Mike',
            tasks: ['Eat', 'Sleep', 'Look after children']
        };
        const expectedOutput = {
            name: 'Mike',
            tasks: ['Eat', 'Sleep', 'Look after children', 'Code!', 'Drink Tea', 'Drink Coffee']
        };
        //Act
        const output = updateTasks(person, 'Code!', 'Drink Tea', 'Drink Coffee');
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('doesn\'t mutate the original input', () => {
        //Arrange
        const person = {
            name: 'Mike',
            tasks: ['Eat', 'Sleep', 'Look after children']
        };
        const copyPerson = {...person}
        copyPerson.tasks = [...person.tasks]
        //Act
        updateTasks(person, 'Code!', 'Drink Tea', 'Drink Coffee');
        //Assert
        expect(person).toEqual(copyPerson);
      });
  });