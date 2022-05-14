'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CURRENT_SCORE_ID,
  ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';
import { initFinalPage } from './finalPage.js';

export const initQuestionPage = () => {
  const backgroundEl = document.getElementById('background');
  backgroundEl.classList.add('background-question-page');

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const currentScore = updateScore(quizData.questions);
  const scoreElement = createScoreElement(currentScore);
  scoreElement.classList.add('score');
  userInterface.appendChild(scoreElement);

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', (e) => {
      checkAnswer(currentQuestion, key);

      const currentScore = updateScore(quizData.questions);
      const currentScoreElement = document.getElementById(CURRENT_SCORE_ID);
      currentScoreElement.innerHTML = currentScore;
      setLocalStorageItem();
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
      if (!currentQuestion.selected) {
        checkAnswer(currentQuestion, 'not replied');
        setLocalStorageItem();
      } else {
        if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
          nextQuestion();
        } else {
          const currentScore = updateScore(quizData.questions);
          const amountOfQuestions = quizData.questions.length;
          initFinalPage(currentScore, amountOfQuestions);
        }
      }
    });
};
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

export const updateScore = (quizDataQuestions) => {
  const correctAnswers = quizDataQuestions.filter(
    (question) => question.correct === question.selected
  );

  return correctAnswers.length;
};

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

const checkAnswer = (currentQuestion, answer) => {
  currentQuestion.selected = answer;

  const answerButtons = Array.from(document.querySelectorAll('.btn-answer'));
  answerButtons.forEach((element) => {
    element.disabled = 'true';
    element.style.cursor = 'auto';

    answerButtons.indexOf(element) === getTheIndexOfCorrectAnswer()
      ? element.classList.add('btn-correct-answer')
      : element.classList.add('btn-wrong-answer');
  });
};

const setLocalStorageItem = () => {
  const selectedAnswers = quizData.questions
    .filter((question) => question.selected)
    .map((question) => question.selected);

  const jsonSelectedAnswersArr = JSON.stringify(selectedAnswers);
  localStorage.setItem('selectedAnswersArray', jsonSelectedAnswersArr);
};
