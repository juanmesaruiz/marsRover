# Mars Rover Mission

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://juanmesaruiz.github.io/marsRover/)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://htmlpreview.github.io/?https://github.com/juanmesaruiz/marsRover/blob/master/coverage/lcov-report/index.html)
[![GitHub version](https://img.shields.io/badge/version-1.0.0-cornflowerblue.svg)](https://github.com/juanmesaruiz/marsRover/blob/master/package.json)
[![GitHub demo](https://img.shields.io/badge/demo-available-blue.svg)](https://juanmesaruiz.github.io/marsRover/)
[![GitHub license](https://img.shields.io/badge/license-MIT-purple.svg)](https://github.com/juanmesaruiz/marsRover/blob/master/LICENSE.md)

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. We create a software that translates the commands sent from earth to instructions
that are understood by the rover.

You can try it here: https://juanmesaruiz.github.io/marsRover/

We can send instructions by keyboard one by one or sending a battery of it with an input.

The rover can move:
 - Forward: F in input or W on keyboard
 - Left: L in input or A on keyboard
 - Right: R in input or D on keyboard

The rover will detect if there are an obstacle in the next movement, if there is anything there it will move,
if not, it will stay in the same position and direction.

The initial configuration is random, random Rover position and random positions of the first 50 obstacles.

## How run it?
### `yarn install`

To install the dependencies needed to run it.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn test`

Launches the test runner in the interactive watch mode and collecting coverage.
This project has a 100% test coverage.
