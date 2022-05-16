'use strict';
import { quizData } from '../data.js';
import { USER_INTERFACE_ID, CURRENT_SCORE_ID } from '../constants.js';
import { createClosingElement } from '../views/finalPageView.js';

export const initFinalPage = (currentScore, amountOfQuestions) => {
  const backgroundEl = document.getElementById('background');
  backgroundEl.classList.add('background-question-page');

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const closingElement = createClosingElement(currentScore, amountOfQuestions);
  userInterface.appendChild(closingElement);

  const questions = quizData.questions;
  questions.forEach((question) => {
    const selectedAnswer = question.answers[question.selected]
      ? question.answers[question.selected]
      : 'Not replied';
    const correctAnswer = question.answers[question.correct];
    // const indexOfCorrectAnswer = getTheIndexOfAnswer(question.correct);
    closingElement.innerHTML += `<div class='result'><p class='question'>${question.text} <p>
    <p>Selected: ${selectedAnswer}</p>
    <p>Correct:  ${correctAnswer}</p></div>`;
  });

  localStorage.removeItem('selectedAnswersArray');
};
