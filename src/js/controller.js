import {
  getActiveTimeframe,
  getDataByTimeframe,
  setActiveTimeframe,
  setData,
} from './model.js';
import CardView from './view.js';

const view = new CardView();

/**
 * Initializes the time tracking dashboard on page load.
 *
 * @async
 * @function init
 * @description
 * Fetches JSON data, loads it into the model, and triggers the initial render of the dashboard.
 * Also highlights the default active timeframe button for visual feedback.
 *
 * @returns {Promise<void>} Resolves after the initial render is complete
 */
async function init() {
  try {
    const response = await fetch('../../data.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setData(data);

    const cards = getDataByTimeframe();

    view.renderCards(cards);
    view.highlightActiveButton(getActiveTimeframe());
  } catch (error) {
    console.error('Error fetching or parsing data.json:', error);
  }
}

/**
 * Sets up event delegation for timeframe toggle buttons.
 *
 * @function setupEventListeners
 * @description
 * Attaches a single click listener to the timeframe button container.
 * On button click, it updates the app state with the selected timeframe,
 * fetches the filtered data, and triggers a re-render of the dashboard UI.
 *
 * This function ensures that UI updates remain decoupled from direct DOM manipulation
 * and are driven by state changes, following MVC principles.
 */
const setupEventListeners = () => {
  const btnsContainer = document.querySelector(
    '.profile-card__timeframe-toggle'
  );

  btnsContainer.addEventListener('click', e => {
    const btn = e.target.closest('[data-timeframe]');
    if (!btn) return;

    const newTimeframe = btn.dataset.timeframe;
    setActiveTimeframe(newTimeframe);

    const newData = getDataByTimeframe();

    view.renderCards(newData);
    view.highlightActiveButton(newTimeframe);
  });
};

init();
setupEventListeners();
