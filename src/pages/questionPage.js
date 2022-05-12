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
import { initFinalPage } from './finalPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const scoreElement = createScoreElement();
  userInterface.appendChild(scoreElement);

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', (e) => {
      const currentScore = updateScore(quizData.questions);
      scoreElement.innerHTML = `Score : ${currentScore} of 10`;
      checkAnswer(currentQuestion, key);
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
<<<<<<< HEAD
=======
      console.log('hello world');
>>>>>>> 22df386 (conflicts are resolved)
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
      if (currentQuestion.selected === null) {
        checkAnswer(currentQuestion, 'not replied');
        setTimeout(nextQuestion, '2000');
      } else {
        if (quizData.currentQuestionIndex < quizData.questions.length) {
          nextQuestion();
        } else {
<<<<<<< HEAD
          initFinalPage ();
=======
          initFinalPage();
>>>>>>> 22df386 (conflicts are resolved)
        }
      }
    });
};
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
// TODO: Better to use this
>>>>>>> 66d2feb (Modified question page next button user interaction)
=======
>>>>>>> 22df386 (conflicts are resolved)
const updateScore = (quizDataQuestions) => {
  const correctAnswers = quizDataQuestions.filter(
    (question) => question.correct === question.selected
  );

  return correctAnswers.length;
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 22df386 (conflicts are resolved)
const getTheIndexOfCorrectAnswer = () => {
  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;

  switch (correctAnswer) {
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
<<<<<<< HEAD

const checkAnswer = (currentQuestion, answer) => {
  currentQuestion.selected = answer;
=======
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
>>>>>>> 66d2feb (Modified question page next button user interaction)
=======

const checkAnswer = (currentQuestion, answer) => {
  currentQuestion.selected = answer;
>>>>>>> 22df386 (conflicts are resolved)

  console.log(`${currentQuestion.selected}is current question selected`);
  const answerButtons = Array.from(document.querySelectorAll('.btn-answer'));

  answerButtons.forEach((element) => {
    element.disabled = 'true';
    element.style.cursor = 'auto';

    answerButtons.indexOf(element) === getTheIndexOfCorrectAnswer()
      ? element.classList.add('btn-correct-answer')
      : element.classList.add('btn-wrong-answer');
  });
};
