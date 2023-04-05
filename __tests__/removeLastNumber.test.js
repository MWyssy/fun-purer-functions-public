const removeLastNumber = require('../removeLastNumber');

describe('removeLastNumber tests', () => {
    test('returns an empty array if passed an empty array', () => {
      //Arrange
      const arrayOfNumbers = [];
      const expectedOutput = [];
      //Act
      const output = removeLastNumber(arrayOfNumbers);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new empty array if passed an empty array', () => {
        //Arrange
        const arrayOfNumbers = [];
        const expectedOutput = [];
        //Act
        const output = removeLastNumber(arrayOfNumbers);
        //Assert
        expect(output).not.toBe(expectedOutput);
      });
      test('returns an empty array if passed an array with only one element', () => {
        //Arrange
        const arrayOfNumbers = [1];
        const expectedOutput = [];
        //Act
        const output = removeLastNumber(arrayOfNumbers);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('returns a new array which is a copy of the passed array with the last number removed', () => {
        //Arrange
        const arrayOfNumbers = [1, 2, 3, 4];
        const expectedOutput = [1, 2, 3];
        //Act
        const output = removeLastNumber(arrayOfNumbers);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('does not mutate the original array', () => {
        //Arrange
        const arrayOfNumbers = [1, 2, 3, 4];
        const unchangedArrayOfNumbers = [...arrayOfNumbers];
        //Act
        output = removeLastNumber(arrayOfNumbers);
        //Assert
        expect(arrayOfNumbers).toEqual(unchangedArrayOfNumbers);
      });
  });