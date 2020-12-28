import React from 'react';
import { connect } from 'react-redux';

import { getObstacles } from '../reducers';

const LogObstacles = ({ obstacles }) => (
  <>
    {obstacles.map(({ x, y }, i) => (
      <p key={`${x}-${y}`}>
        Obstacle nº{i + 1} on position x {x} and y {y}{' '}
      </p>
    ))}
  </>
);

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
});

export default connect(mapStateToProps, {})(LogObstacles);
