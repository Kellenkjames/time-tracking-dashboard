import {
  getActiveTimeframe,
  getDataByTimeframe,
  setActiveTimeframe,
  setData,
} from './model.js';
import view from './view.js';

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
    console.log('Data loaded:', data);

    // Load data into model state
    setData(data);

    // Pull filtered version based on current timeframe
    const cards = getDataByTimeframe();

    // Render cards to the dashboard
    view.renderCards(cards);

    // Highlight the default active button
    view.highlightActiveButton(getActiveTimeframe());
  } catch (error) {
    console.error('Error fetching or parsing data.json:', error);
  }
}

init();

const btnsContainer = document.querySelector('.profile-card__timeframe-toggle');

btnsContainer.addEventListener('click', e => {
  const btn = e.target.closest('[data-timeframe]');
  if (!btn) return;

  const newTimeframe = btn.dataset.timeframe;
  console.log(`Timeframe selected: ${newTimeframe}`);

  // Call model.setActiveTimeframe(newTimeframe)
  setActiveTimeframe(newTimeframe);

  // Get new filtered data: model.getDataByTimeframe()
  const newData = getDataByTimeframe();

  // Call view.renderCards(newData)
  view.renderCards(newData);

  // Call view.highlightActiveButton(newTimeframe)
  view.highlightActiveButton(newTimeframe);
});
