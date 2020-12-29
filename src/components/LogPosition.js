import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { roverClearPositionLog } from '../actions/roverActions';
import { getRover } from '../reducers';

import Button from './library/Button';

const getLogText = position => {
  if (typeof position === 'string') {
    return position;
  }
  return `X ${position.x}, Y ${position.y}`;
};

const LogPosition = ({
  className,
  rover: { current, direction, log },
  roverClearPositionLog,
}) => {
  const handleClearLog = useCallback(roverClearPositionLog, [
    roverClearPositionLog,
  ]);

  return (
    <div className={className}>
      {current && (
        <p>
          Current position:
          <br />
          <b>
            X {current.x}, Y {current.y}
          </b>
        </p>
      )}
      <p>
        Current direction: <b>{direction}</b>
      </p>
      <Button onClick={handleClearLog}>Clear Log</Button>
      <p>Last positions: </p>
      <div className="positions-container">
        {log.map((position, i) => (
          <p key={i}>{getLogText(position)}</p>
        ))}
      </div>
    </div>
  );
};

const StyledLogPosition = styled(LogPosition)`
  display: inline-block;
  height: 416px;
  overflow: hidden;
  border: 1px solid black;
  margin-left: 30px;
  width: 200px;

  .delete-button {
    float: right;
    margin-right: 30px;
  }

  .positions-container {
    height: 225px;
    overflow: auto;
  }
`;

const mapStateToProps = state => ({
  rover: getRover(state),
});

export default connect(mapStateToProps, { roverClearPositionLog })(
  StyledLogPosition
);
