const cloneObject = require('../cloneObject');

describe('cloneObject tests', () => {
    test('returns an empty object is an empty object is passed', () => {
      //Arrange
      const targetObject = {};
      const sourceObject = {};
      const expectedOutput = {};
      //Act
      const output = cloneObject(targetObject, sourceObject);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns the targetObject', () => {
        //Arrange
        const targetObject = {};
        const sourceObject = {};
        const expectedOutput = {};
        //Act
        const output = cloneObject(targetObject, sourceObject);
        //Assert
        expect(output).toEqual(targetObject);
      });
      test('copies the key-value pairs from the sourceObject to an empty targetObject, and returns the targetObject', () => {
        //Arrange
        const targetObject = {};
        const sourceObject = {
            number1: 1,
            number2: 2,
            number3: 3
        };
        const expectedOutput = sourceObject;
        //Act
        const output = cloneObject(targetObject, sourceObject);
        cloneObject(targetObject, sourceObject)
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('copies the key-value pairs from the sourceObject to the targetObject, and returns the targetObject', () => {
        //Arrange
        const targetObject = {
            number1: 1,
            number2: 2,
            number3: 3
        };
        const sourceObject = {
            number4: 4,
            number5: 5,
            number6: 6
        };
        const expectedOutput = {
            number1: 1,
            number2: 2,
            number3: 3,
            number4: 4,
            number5: 5,
            number6: 6
        };
        //Act
        const output = cloneObject(targetObject, sourceObject);
        cloneObject(targetObject, sourceObject)
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('DOES mutate targetObj, but NOT sourceObj', () => {
        //Arrange
        const targetObject = {
            number1: 1,
            number2: 2,
            number3: 3
        };
        const sourceObject = {
            number4: 4,
            number5: 5,
            number6: 6
        };
        const copySourceObject = {...sourceObject};
        const copyTargetObject = {...targetObject}
        //Act
        cloneObject(targetObject, sourceObject);
        //Assert
        expect(sourceObject).toEqual(copySourceObject);
        expect(targetObject).not.toEqual(copyTargetObject);
      });
  });