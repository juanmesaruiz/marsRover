# Mars Rover Mission
`Author Juan Mesa Ruiz`

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. We create a software that translates the commands sent from earth to instructions
that are understood by the rover.<br />

We can send instructions by keyboard one by one or sending a battery of it with an input. <br />

The rover can move:
<ul>
 <li>Forward: F in input or W on keyboard</li>
 <li>Left: L in input or A on keyboard</li>
 <li>Right: R in input or D on keyboard</li>
</ul>

The rover will detect if there are an obstacle in the next movement, if there is anything there it will move,
if not, it will stay in the same position and direction. <br />

The initial configuration is random, random Rover position and random positions of the first 50 obstacles.

## How run it?
### `yarn install`

To install the dependencies needed to run it.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />

### `yarn test`

Launches the test runner in the interactive watch mode and collecting coverage.<br />
This project has a 100% test coverage.
