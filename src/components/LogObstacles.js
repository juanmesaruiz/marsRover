import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { deleteObstacle } from '../actions/obstaclesActions';
import { getObstacles } from '../reducers';

import Button from './library/Button';

const LogObstacles = ({ deleteObstacle, obstacles }) => {
  const handleDeleteObstacle = useCallback(
    obstacle => deleteObstacle(obstacle),
    [deleteObstacle]
  );

  return (
    <>
      {obstacles.map(({ x, y }, i) => (
        <p key={`${x}-${y}`}>
          Obstacle nº{i + 1} on position x {x} and y {y}
          <Button onClick={() => handleDeleteObstacle({ x, y })}>Delete</Button>
        </p>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
});

export default connect(mapStateToProps, { deleteObstacle })(LogObstacles);
