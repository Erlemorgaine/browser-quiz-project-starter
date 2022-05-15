'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {

  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text:
        '1. Which famous Dutch painter painted the "Girl with a Pearl Earring"?',
      answers: {
        a: 'Rembrandt van Rijn',
        b: 'Johannes Vermeer',
        c: 'Vincent van Gogh',
        d: 'Johannes van Eyck',
      },
      correct: 'b',
      selected: null,
    },
    {
      text:
        '2. Which Dutch painter is one of the most famous self-portrait artists? ',
      answers: {
        a: 'Vincent van Gogh',
        b: 'Eglon van der Neer',
        c: 'Rachel Ruysch',
        d: 'Frans Hals',
      },
      correct: 'a',
      selected: null,
    },
    {
      text:
        '3. In which Dutch museum "Europe`s biggest circular painting" can be found?',
      answers: {
        a: 'Rijksmuseum',
        b: 'Van Gogh Museum',
        c: 'Panorama Mesdag',
        d: 'Kunstmuseum Den Haag',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        '4. Which famous Dutch painter had some of his paintings held by a baker due to unpaid debt?',
      answers: {
        a: 'Johannes van Eyck',
        b: 'Rembrandt van Rijn',
        c: 'Vincent van Gogh',
        d: 'Johannes Vermeer',
      },
      correct: 'd',
      selected: null,
    },
    {
      text:
        '5. Which Dutch painter was a leading figure of the De Stijl (Neoplasticism) art movement? ',
      answers: {
        a: 'Jan Altink',
        b: 'Karel Appel',
        c: 'Piet Mondrian',
        d: 'Gerard Pieter Adolfs',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        '6. Who was the famous Dutch artist that painted the "The Night Watch"? ',
      answers: {
        a: 'Johannes van Eyck',
        b: 'Vincent van Gogh',
        c: 'Johannes Vermeer',
        d: 'Rembrandt van Rijn',
      },
      correct: 'd',
      selected: null,
    },

    {
      text:
        '7. All of the following are common specializations associated with the Dutch Baroque painters EXCEPT: ',
      answers: {
        a: 'Landscape',
        b: 'Group portrait',
        c: 'Still life',
        d: 'Palace art and court life',
      },
      correct: 'd',
      selected: null,
    },

    {
      text:
        '8. Who was the famous Dutch artist that painted the picture called "The Anatomy Lesson of Dr. Nicolaes Tulp" ? ',
      answers: {
        a: 'Johannes van Eyck',
        b: 'Rembrandt van Rijn',
        c: 'Vincent van Gogh',
        d: 'Johannes Vermeer',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: '9. One of Vincent van Gogh`s famous works is " ... ". ',
      answers: {
        a: 'The Starry Night',
        b: 'Viva la Vida, Watermelons',
        c: 'Turtle Tamer',
        d: 'Magnolyas',
      },
      correct: 'a',
      selected: null,
    },

    {
      text:
        '10. Which Dutch painter did French art critic Théophile Thoré-Bürger nickname "The Sphinx of Delft"? ',
      answers: {
        a: 'Rachel Ruysch',
        b: 'Eglon van der Neer',
        c: 'Johannes Vermeer',
        d: 'Frans Hals',
      },
      correct: 'c',
      selected: null,
    },
    // Add more questions here
  ],
};
