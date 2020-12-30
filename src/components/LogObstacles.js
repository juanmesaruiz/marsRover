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
      <h5 className="title">Total obstacles {obstacles.length}:</h5>
      <div className="positions-container">
        {obstacles.map(({ x, y }) => (
          <p key={`${x}-${y}`}>
            X {x}, Y {y}
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
    margin-right: 20px;
  }

  .title {
    margin: 25px 0 0;
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
