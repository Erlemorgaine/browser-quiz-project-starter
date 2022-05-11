'use strict';

import {} from '../constants.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = (score) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <p> ${score}<p>
  `;
  return element;
};
