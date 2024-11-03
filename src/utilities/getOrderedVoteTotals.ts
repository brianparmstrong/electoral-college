/**
 * Code taken from https://stackoverflow.com/questions/17039770/how-do-i-get-the-second-largest-element-from-an-array-in-javascript
 * and modified for my needs
 */

const getOrderedVoteTotals = (voteTotals: number[]) => {
  let first = -Infinity,
    second = -Infinity,
    third = Infinity,
    fourth = Infinity,
    fifth = Infinity;

  for (const value of voteTotals) {
    if (value > first) {
      [second, first] = [first, value]; // save previous first
    } else if (value < first && value > second) {
      second = value; // new second biggest
    }

    if (value < fifth) {
      third = fourth; // new third biggest
      [fourth, fifth] = [fifth, value]; // save previous fifth
    } else if (value > fifth && value < fourth) {
      third = fourth; // new third biggest
      fourth = value; // new fourth biggest
    } else if (value > fifth && value > fourth) {
      third = value; // new third biggest
    }
  }

  console.log(first, second, third, fourth, fifth);
  if (
    first === second ||
    second === third ||
    third === fourth ||
    fourth === fifth
  ) {
    throw new Error(
      'The vote totals passed for each state in voteTotals must be unique. Please check your data and try again.'
    );
  }

  return {
    first,
    second,
    third,
    fourth,
    fifth,
  };
};

export default getOrderedVoteTotals;
