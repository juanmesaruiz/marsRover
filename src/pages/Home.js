import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGrid, getObstacles } from '../reducers';
import {
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
} from '../actions/roverActions';
import { createObstacles } from '../actions/obstaclesActions';

import Input from '../components/library/Input';

import Description from '../components/Description';
import Grid from '../components/Grid';
import LogObstacles from '../components/LogObstacles';
import LogPosition from '../components/LogPosition';
import RandomObstacleButton from '../components/RandomObstacleButton';
import Title from '../components/Title';

import '../App.css';
import {
  getRandomCoordinates,
  getRandomRoverPosition,
} from '../common/helpers';
import { KEYBOARDS_CODES } from '../common/constants';

const Home = ({
  createObstacles,
  grid,
  obstaclesCoordinates,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
}) => {
  useEffect(() => {
    const obstaclesCoordinates = getRandomCoordinates(grid, 20);
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
    <div className="App">
      <Title />
      <Description />
      <Input />
      <RandomObstacleButton />
      <Grid />
      <LogPosition />
      <LogObstacles />
    </div>
  );
};

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  createObstacles,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
})(Home);
