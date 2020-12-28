import React from 'react';

const Description = () => (
  <>
    <p>
      We have to send instructions to our Rover on Mars, the movement that Rover
      can do is one per time and the directions are: F Forward, L Left and R
      Right.
    </p>
    <p>
      We have to take care about the Left and Right instructions, because when
      rovers turns right or left his direction will change according to the new
      one, for example if Rover direction is North and it turns right the new
      direction must be East, so we have to send Forward to continue in that
      direction if we send and another right, Rover will change his direction to
      South moving to that direction.
    </p>
    <p>We have different options to do it:</p>
    <ol>
      <li>
        Using keyboard and see how it move in live: Front W Key, Left A Key,
        Right D Key
      </li>
      <li>
        Using and input to send a collection on commands, for example: FFRLFRFL
      </li>
    </ol>
    <p>
      We generate randomly 20 obstacles and the rover position aswell, so
      everytime we refresh the page we will get different grid configurations.
      At the same time, we add a button to add a random obstacle everytime we
      click on it.
    </p>
    <p>
      We can see in live in the grid the rover movement, and we have 2 logs to
      check the coordinates of obstacles and rover historic movement. At the
      same obstacle log, if you want, you can remove the obstacle using the X on
      it.
    </p>
  </>
);

export default Description;
