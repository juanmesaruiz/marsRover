import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
} from '../actions/roverActions';
import { createObstacles } from '../actions/obstaclesActions';
import { getGrid, getObstacles } from '../reducers';

import Actions from '../components/Actions';
import Description from '../components/Description';
import Grid from '../components/Grid';
import LogPosition from '../components/LogPosition';
import Title from '../components/Title';

import {
  getRandomCoordinates,
  getRandomRoverPosition,
} from '../common/helpers';
import { INITIAL_OBSTACLES, KEYBOARDS_CODES } from '../common/constants';

const Home = ({
  className,
  createObstacles,
  grid,
  obstaclesCoordinates,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
}) => {
  useEffect(() => {
    const obstaclesCoordinates = getRandomCoordinates(grid, INITIAL_OBSTACLES);
    const roverPosition = getRandomRoverPosition(grid, obstaclesCoordinates);
    createObstacles(obstaclesCoordinates);
    roverSetPosition(roverPosition);
  }, [createObstacles, grid, roverSetPosition]);

  useEffect(() => {
    const eventListener = event => {
      const { code } = event;
      switch (code) {
        case KEYBOARDS_CODES.A:
        case KEYBOARDS_CODES.D:
        case KEYBOARDS_CODES.W:
          return roverNewKeyboardMove({ code, grid, obstaclesCoordinates });
        default:
          return null;
      }
    };
    document.addEventListener('keydown', eventListener);
    return () => document.removeEventListener('keydown', eventListener);
  }, [grid, obstaclesCoordinates, roverNewKeyboardMove]);

  useEffect(() => {
    return () => {
      roverClear();
    };
  }, [roverClear]);

  return (
    <div className={className}>
      <header>
        <Title />
      </header>
      <section>
        <Description />
      </section>
      <main className="main-container">
        <Grid />
        <LogPosition />
        <Actions />
      </main>
    </div>
  );
};

const StyledHome = styled(Home)`
  padding: 50px;
  text-align: center;

  .main-container {
    margin-top: 20px;
  }
`;

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  createObstacles,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
})(StyledHome);
