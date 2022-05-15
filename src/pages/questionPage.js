'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CURRENT_SCORE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';
import { initFinalPage } from './finalPage.js';

export const initQuestionPage = () => {
  //Style background
  const backgroundEl = document.getElementById('background');
  backgroundEl.classList.add('background-question-page');

  //Clear UserInterface

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //Update Score, Create Score Element, Style Score Element

  const currentScore = updateScore(quizData.questions);
  const scoreElement = createScoreElement(currentScore);
  scoreElement.classList.add('score');
  userInterface.appendChild(scoreElement);

  //Create questions and answers

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    answersListElement.appendChild(answerElement);

    //When an answer is selected(answer button is clicked)

    answerElement.addEventListener('click', (e) => {
      checkAnswer(currentQuestion, key);

      //Update the current score

      const currentScore = updateScore(quizData.questions);
      const currentScoreElement = document.getElementById(CURRENT_SCORE_ID);
      currentScoreElement.innerHTML = currentScore;

      // Call setLocalStorageItem to store Selected Answers in Local Storage

      setLocalStorageItem();
    });
  }

  //When user clicks next question button

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

      //If user doesn't select and answer.
      if (!currentQuestion.selected) {
        // Call checkAnswer function to display the correct answer and assign 'not-replied ' to selected property
        checkAnswer(currentQuestion, 'not replied');

        // Call setLocalStorageItem to store Selected Answers in Local Storage

        setLocalStorageItem();
      }

      //If user selected an answer
      else {
        //If it is not the last question, display the next question
        if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
          nextQuestion();
        }

        // If it is the last question then display final page
        else {
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
  //Assign given answer to selected property of current question
  currentQuestion.selected = answer;

  //Disable all the answer buttons
  const answerButtons = Array.from(document.querySelectorAll('.btn-answer'));
  answerButtons.forEach((element) => {
    element.disabled = 'true';
    element.style.cursor = 'auto';

    //Style answer buttons depending on their correctness
    answerButtons.indexOf(element) === getTheIndexOfCorrectAnswer()
      ? element.classList.add('btn-correct-answer')
      : element.classList.add('btn-wrong-answer');
  });
};

const setLocalStorageItem = () => {
  // Create an array to keep selected answers
  const selectedAnswers = quizData.questions
    .filter((question) => question.selected)
    .map((question) => question.selected);

  //Convert the selectedAnswer array to JSON string and keep it in local storage

  const jsonSelectedAnswersArr = JSON.stringify(selectedAnswers);
  localStorage.setItem('selectedAnswersArray', jsonSelectedAnswersArr);
};
