'use strict';

/**
 * Create a closing element
 * @returns {Element}
 */

export const createClosingElement = () => {
  const element = document.createElement('div');
  element.className = 'final-page';

  element.innerHTML = String.raw`
 <p> well done! </p>
`;

  return element;
};
