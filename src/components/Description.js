import React from 'react';
import styled from 'styled-components';

const Description = ({ className }) => (
  <div className={className}>
    <p>
      You’re part of the team that explores Mars by sending remotely controlled
      vehicles to the surface of the planet. We create a software that
      translates the commands sent from earth to instructions that are
      understood by the rover.
    </p>
    <p>
      We can send instructions by keyboard one by one or sending a battery of it
      with an input. <br />
      The rover can move:
      <ul>
        <li>
          Forward: <b>F</b> in input or <b>W</b> on keyboard
        </li>
        <li>
          Left: <b>L</b> in input or <b>A</b> on keyboard
        </li>
        <li>
          Right: <b>R</b> in input or <b>D</b> on keyboard
        </li>
      </ul>
    </p>
    <p>
      The rover will detect if there are an obstacle in the next movement, if
      there is anything there it will move, if not, it will stay in the same
      position and direction.
    </p>

    <p>
      On the first load we generate randomly <b>50 obstacles</b> and the rover
      position aswell, so everytime we refresh the page we will get different
      grid configurations. At the same time, we add a button to add a random
      obstacle everytime we click on it.
    </p>
    <p>
      We can see in live in the grid the rover movement, and we have{' '}
      <b>2 logs</b> to check the coordinates of obstacles and the rover historic
      movement. At the same obstacle log, if you want, you can remove the
      obstacle using the Delete button on each one.
    </p>
  </div>
);

const StyledDescription = styled(Description)`
  text-align: justify;
`;

export default StyledDescription;
