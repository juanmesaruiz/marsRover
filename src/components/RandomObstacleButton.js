import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { createObstacles } from '../actions/obstaclesActions';
import { getGrid } from '../reducers';

import Button from './library/Button';

import { getRandomCoordinates } from '../common/helpers';

const RandomObstacleButton = ({ createObstacles, grid }) => {
  const handleCreateRandomObstacle = useCallback(
    () => createObstacles(getRandomCoordinates(grid)),
    [createObstacles, grid]
  );

  return (
    <Button onClick={handleCreateRandomObstacle}>Add random obstacle</Button>
  );
};

const mapStateToProps = state => ({
  grid: getGrid(state),
});

export default connect(mapStateToProps, { createObstacles })(
  RandomObstacleButton
);
