import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { roverClearPositionLog } from '../actions/roverActions';
import { getRover } from '../reducers';

import Button from './library/Button';

const LogPosition = ({
  rover: { current, direction, log },
  roverClearPositionLog,
}) => {
  const handleClearLog = useCallback(roverClearPositionLog, [
    roverClearPositionLog,
  ]);

  return (
    <>
      {current && (
        <p>
          Current position: X {current.x}, Y {current.y}
        </p>
      )}
      <p>Current direction: {direction}</p>
      <p>Last positions: </p>
      <Button onClick={handleClearLog}>Clear Log</Button>
      {log.map(({ x, y }, i) => (
        <p key={i}>
          X {x}, Y {y}
        </p>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  rover: getRover(state),
});

export default connect(mapStateToProps, { roverClearPositionLog })(LogPosition);
