import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteObstacle } from '../actions/obstaclesActions';
import { getObstacles } from '../reducers';

import Button from './library/Button';

const LogObstacles = ({ className, deleteObstacle, obstacles }) => {
  const handleDeleteObstacle = useCallback(
    obstacle => deleteObstacle(obstacle),
    [deleteObstacle]
  );

  return (
    <div className={className}>
      <p>Total Obstacles {obstacles.length}:</p>
      <div className="positions-container">
        {obstacles.map(({ x, y }) => (
          <p key={`${x}-${y}`}>
            x {x} / y {y}
            <Button
              className="delete-button"
              onClick={() => handleDeleteObstacle({ x, y })}
            >
              Delete
            </Button>
          </p>
        ))}
      </div>
    </div>
  );
};

const StyledLogObstacles = styled(LogObstacles)`
  .delete-button {
    float: right;
    margin-right: 10px;
  }

  .positions-container {
    height: 225px;
    overflow: auto;
  }
`;

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
});

export default connect(mapStateToProps, { deleteObstacle })(StyledLogObstacles);
