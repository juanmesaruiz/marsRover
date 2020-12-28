import React from 'react';
import { connect } from 'react-redux';

import { getRover } from '../reducers';

const LogPosition = ({ rover: { current, direction, log } }) => (
  <>
    {current && (
      <p>
        Current position: X {current.x}, Y {current.y}
      </p>
    )}
    <p>Current direction: {direction}</p>
    <p>Last positions: </p>
    {log.map(({ x, y }, i) => (
      <p key={i}>
        X {x}, Y {y}
      </p>
    ))}
  </>
);

const mapStateToProps = state => ({
  rover: getRover(state),
});

export default connect(mapStateToProps, {})(LogPosition);
