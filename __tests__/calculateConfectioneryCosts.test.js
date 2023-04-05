const calculateConfectioneryCosts = require('../calculateConfectioneryCosts');

describe('calculateConfectioneryCosts', () => {
    test('returns an array', () => {
      //Arrange
      const celebs = [];
      const expectedOutput = [];
      //Act
      const output = calculateConfectioneryCosts(celebs);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new array', () => {
        //Arrange
        const celebs = [];
        const expectedOutput = [];
        //Act
        const output = calculateConfectioneryCosts(celebs);
        //Assert
        expect(output).not.toBe(celebs);
      });
      test('returns a copy of all the objects inside the array, with the yearlyCumulativeSpend value updated', () => {
        //Arrange
        const celebs = [
            {
                name: "Beyonce Bowls",
                yearlyCumulativeSpend: "£44",
                purchaseToday: {
                  item: "White mice",
                  costPerItem: "£3",
                  amountBought: 17,
                },
              },
              {
                name: "Kray-Z",
                yearlyCumulativeSpend: "£28",
                purchaseToday: {
                  item: "Flying saucers",
                  costPerItem: "£2",
                  amountBought: 28,
                },
              },
              {
                name: "Matey Terry",
                yearlyCumulativeSpend: "£36",
                purchaseToday: {
                  item: "Cola bottles",
                  costPerItem: "£4",
                  amountBought: 81,
                },
              },
              {
                name: "Justine Klimberbake",
                yearlyCumulativeSpend: "£30",
                purchaseToday: {
                  item: "Giant jelly snakes",
                  costPerItem: "£103",
                  amountBought: 2,
                },
              },
        ];
        const expectedOutput = [
            {
                name: "Beyonce Bowls",
                yearlyCumulativeSpend: "£95",
                purchaseToday: {
                  item: "White mice",
                  costPerItem: "£3",
                  amountBought: 17,
                },
              },
              {
                name: "Kray-Z",
                yearlyCumulativeSpend: "£84",
                purchaseToday: {
                  item: "Flying saucers",
                  costPerItem: "£2",
                  amountBought: 28,
                },
              },
              {
                name: "Matey Terry",
                yearlyCumulativeSpend: "£360",
                purchaseToday: {
                  item: "Cola bottles",
                  costPerItem: "£4",
                  amountBought: 81,
                },
              },
              {
                name: "Justine Klimberbake",
                yearlyCumulativeSpend: "£236",
                purchaseToday: {
                  item: "Giant jelly snakes",
                  costPerItem: "£103",
                  amountBought: 2,
                },
              },
        ];
        //Act
        const output = calculateConfectioneryCosts(celebs);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('does not mutate the original input', () => {
        //Arrange
        const celebs = [
            {
                name: "Beyonce Bowls",
                yearlyCumulativeSpend: "£44",
                purchaseToday: {
                  item: "White mice",
                  costPerItem: "£3",
                  amountBought: 17,
                },
              },
              {
                name: "Kray-Z",
                yearlyCumulativeSpend: "£28",
                purchaseToday: {
                  item: "Flying saucers",
                  costPerItem: "£2",
                  amountBought: 28,
                },
              },
              {
                name: "Matey Terry",
                yearlyCumulativeSpend: "£36",
                purchaseToday: {
                  item: "Cola bottles",
                  costPerItem: "£4",
                  amountBought: 81,
                },
              },
              {
                name: "Justine Klimberbake",
                yearlyCumulativeSpend: "£30",
                purchaseToday: {
                  item: "Giant jelly snakes",
                  costPerItem: "£103",
                  amountBought: 2,
                },
              },
        ];
        const copyCelebs = [...celebs];
        copyCelebs.map((celeb) => {
            const copyCeleb = {...celebs};

            for (purchaseToday in celeb) {
                copyCeleb.purchaseToday = {...celeb.purchaseToday};
            };
        });
        //Act
        calculateConfectioneryCosts(celebs);
        //Assert
        expect(celebs).toEqual(copyCelebs);
        expect(celebs.map((celeb) => celeb)).toEqual(copyCelebs.map((copyCeleb) => copyCeleb));    
    });
  });