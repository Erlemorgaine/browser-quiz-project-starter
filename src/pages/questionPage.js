'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_VIEW_ID,
  ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const indexOfCorrectAnswer = () => {
    switch (currentQuestion.correct) {
      case 'a':
        return 0;
      case 'b':
        return 1;
      case 'c':
        return 2;
      case 'd':
        return 3;
    }
  };

  
  const scoreElement = createScoreElement();
  userInterface.appendChild(scoreElement);

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', (e) => {
      currentQuestion.selected = key;
      checkAnswer(indexOfCorrectAnswer());
      //updateScore();

      // TODO: Don't use hardcoded 10, use the length of all the questions. Use it as a parameter in createScoreElement
      // TODO: Move this line above the function call of createScoreElement, pass it as an argument to createScoreElement

      const currentScore = updateScore(quizData.questions);
      scoreElement.innerHTML =  `Score : ${currentScore} of 10`;
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};


// TODO: Better to use this
 const updateScore = (quizDataQuestions) => {

   const correctAnswers = quizDataQuestions
     .filter((question) => question.correct === question.selected);
   
   return correctAnswers.length;
 }



//   const updateScore = (currentQuestion) => {

//     let score = 0;
//   if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer) {
//     return score++;
//   } else {
//     return score;
//   }
//   }

// quizData.currentScore += updateScore(currentQuestion);
  // updateScore(e, selectedAnswer, correctAnswer);




const checkAnswer = (indexOfCorrectAnswer) => {
  const answerButtons = Array.from(document.querySelectorAll('.btn-answer'));

  answerButtons.forEach((element) => {
    element.disabled = 'true';
    element.style.cursor = 'auto';

    answerButtons.indexOf(element) === indexOfCorrectAnswer
      ? element.classList.add('btn-correct-answer')
      : element.classList.add('btn-wrong-answer');
  });
};
