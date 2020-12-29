import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { createObstacles } from '../actions/obstaclesActions';
import { getGrid, getObstacles, getRover } from '../reducers';

import Button from './library/Button';

import { getNewObstaclesCoordinates } from '../common/helpers';

const RandomObstacleButton = ({
  createObstacles,
  grid,
  obstaclesCoordinates,
  rover: { current },
}) => {
  const handleCreateRandomObstacle = useCallback(
    () =>
      createObstacles(
        getNewObstaclesCoordinates(grid, current, obstaclesCoordinates)
      ),
    [createObstacles, current, grid, obstaclesCoordinates]
  );

  return (
    <Button onClick={handleCreateRandomObstacle}>Add random obstacle</Button>
  );
};

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
  rover: getRover(state),
});

export default connect(mapStateToProps, { createObstacles })(
  RandomObstacleButton
);
