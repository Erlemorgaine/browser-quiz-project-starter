'use strict';

//import { } from '../constants.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = () => {
  const element = document.createElement('div');
  element.className = 'score';

  element.innerHTML = 'hello';

  /*  element.innerHTML = String.raw`
  score = ${scoreCounter} of 10;
`; */
  return element;
};

createScoreElement();

/*const scoreCounter = (){
  let score = 0; 
const correctAnswer = currentQuestion.correct;
const selectedAnswer = document.getElementBy...('');
if (selectedAnswer === correctAnswer) {
 return  score++;
} else {
 return score;
}

} */
