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
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
      if (currentQuestion.selected === null) {
        checkAnswer(currentQuestion, 'not replied');
        setTimeout(nextQuestion, '2000');
      } else {
        if (quizData.currentQuestionIndex < quizData.questions.length) {
          nextQuestion();
        } else {
          initFinalPage();
        }
      }
    });
};
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const updateScore = (quizDataQuestions) => {
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
