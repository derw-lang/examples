#!/usr/bin/env bash
derw install
derw bundle --entry src/AfterTime.derw --output dist/aftertime.js
derw bundle --entry src/Button.derw --output dist/button.js
derw bundle --entry src/Duality.derw --output dist/duality.js
derw bundle --entry src/Jeopardy.derw --output dist/jeopardy.js
derw bundle --entry src/TextInput.derw --output dist/textinput.js