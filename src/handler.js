'use strict';

module.exports.generateRandomNumber =  event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The generated random number is: ",randomNumber);
  return randomNumber;
};
