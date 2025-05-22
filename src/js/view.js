/*

✅ 1. What is the job of each file?
model.js
Ask yourself:

What state does the app need to hold? (e.g., active timeframe, data set?)

What responsibilities belong only to the model layer?

Should the model return raw or processed data to the view?

Think: “What do I want the view to ask me for, and how should I respond?”

view.js

* Challenge:

What part of the UI changes when the timeframe changes?

- Each grid card activity card changes when the timeframe changes

What responsibilities should the view have no knowledge of? (e.g., it shouldn’t know about JSON or app state)

- The view shouldn't know about the model which will hold the JSON file
- The view shouldn't know about the app state

What should be dynamic vs. static markup?
- Dynamic = JSON data which represents
- Static = Button links which represent each timeframe, daily, weekly, monthly

Ask: “If the model gives me clean data, how do I visually represent it with consistent structure?”

The model will be responsible for tracking app state and providing clean data (JSON data) to the view layer


*/
