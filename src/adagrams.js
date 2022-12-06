const LETTERPOOL = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

export const drawLetters = () => {
  let letterPool = Object.entries(LETTERPOOL);
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * 26);
    if (letterPool[letterIndex][1] > 0) {
      hand.push(letterPool[letterIndex][0]);
      letterPool[letterIndex][1] -= 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

// // HELPER FUNCTIONS
// const drawLetter = (wordPool, currentHand) => {
//   const letterIndex = Math.floor(Math.random() * 26)
//   if (wordPool)
// }
