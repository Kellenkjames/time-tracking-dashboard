// model.js — owns app state and provides data for the view

const state = {
  data: [],
  activeTimeframe: 'weekly',
};

/**
 * Initializes the internal state with parsed time tracking data.
 *
 * @param {Array<Object>} json - Parsed time tracking data from JSON
 */
const setData = function (json) {
  state.data = json;
};

/**
 * Updates the active timeframe used to filter and display tracking data.
 *
 * @param {'daily' | 'weekly' | 'monthly'} timeframe - User-selected timeframe
 */
const setActiveTimeframe = function (timeframe) {
  state.activeTimeframe = timeframe;
};

/**
 * Returns the currently selected timeframe (e.g., 'daily', 'weekly', 'monthly').
 *
 * @returns {string}
 */
const getActiveTimeframe = () => state.activeTimeframe;

/**
 * Returns a simplified array of data based on the currently active timeframe.
 *
 * @returns {Array<{title: string, current: number, previous: number}>}
 */
const getDataByTimeframe = () => {
  return state.data.map(({ title, timeframes }) => {
    const { current, previous } = timeframes[state.activeTimeframe];
    return { title, current, previous };
  });
};

export { getActiveTimeframe, getDataByTimeframe, setActiveTimeframe, setData };
