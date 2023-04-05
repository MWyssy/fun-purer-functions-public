/*
Write a function that takes an array of pop star objects with information about the amount they have 
spent so far this year on confectionery at the cinema, and how much they have spent on today's visit. 
It should return a **new array** of **new objects** with a property for the pop star's `name` and the 
`yearlyCumulativeSpend` property updated to include today's costs.

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
*/

function calculateConfectioneryCosts(celebs) {
    const copyCelebs = [...celebs];
    
    function updateFigure(item, amount, yearlySpend) {
        const itemNum = Number(item.slice(1));
        const yearlySpendNum = Number(yearlySpend.slice(1));
        return yearlySpend = yearlySpendNum + (itemNum * amount);
    }
    
    return copyCelebs.map((celeb) => {
        const copyCeleb = {...celeb};

        for (purchaseToday in celeb) {
            copyCeleb.purchaseToday = {...celeb.purchaseToday};
        }

        const item = copyCeleb.purchaseToday.costPerItem;
        const amount = copyCeleb.purchaseToday.amountBought;
        const yearlySpend = copyCeleb.yearlyCumulativeSpend;
        const updatedYearlySpend = `£${updateFigure(item, amount, yearlySpend)}`
        copyCeleb.yearlyCumulativeSpend = updatedYearlySpend
        return copyCeleb
    })
};

module.exports = calculateConfectioneryCosts;