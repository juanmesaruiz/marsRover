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
        <div>
          <span className="current">Current position:</span>
          <b>
            X {current.x}, Y {current.y}
          </b>
        </div>
      )}
      <p className="direction">
        Current direction: <b>{direction}</b>
      </p>
      <Button onClick={handleClearLog}>Clear Log</Button>
      {!!log.length && (
        <>
          <h5 className="title">Last positions: </h5>
          <div className="positions-container">
            {log.map((position, i) => (
              <p key={i}>{getLogText(position)}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const StyledLogPosition = styled(LogPosition)`
  display: inline-block;
  height: 376px;
  overflow: hidden;
  border: 1px solid black;
  margin-left: 30px;
  padding: 20px 20px;
  width: 200px;

  .current {
    display: block;
    margin: 0 0 5px;
  }

  .direction {
    margin: 20px 0 18px;
  }

  .delete-button {
    float: right;
    margin-right: 30px;
  }

  .title {
    margin: 23px 0 0 0;
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
