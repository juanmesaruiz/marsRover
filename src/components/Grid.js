import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getGrid, getObstacles, getRover } from '../reducers';
import { getDirectionArrow } from '../common/helpers';

const Grid = ({
  className,
  obstacles,
  grid: { x, y },
  rover: { current, direction },
}) => {
  const renderGrid = () => {
    const gridItems = [];
    const columns = x;
    const rows = y;
    let rowsI = 0;
    const obstaclesAvailable = [...obstacles];
    for (rowsI; rowsI <= rows; rowsI++) {
      let columnsI = 0;
      const rowItems = [];

      for (columnsI; columnsI <= columns; columnsI++) {
        const xCoordinate = columnsI;
        const yCoordinate = rows - rowsI;
        const id = `${xCoordinate}-${yCoordinate}`;
        let isObstacle = false;
        let isRoverPosition = false;

        if (xCoordinate === current.x && yCoordinate === current.y) {
          isRoverPosition = true;
        } else if (obstaclesAvailable.length) {
          const obstacleIndex = obstaclesAvailable.findIndex(
            obstacle => obstacle.x === xCoordinate && obstacle.y === yCoordinate
          );
          if (obstacleIndex !== -1) {
            isObstacle = true;
            obstaclesAvailable.splice(obstacleIndex, 1);
          }
        }

        rowItems.push(
          <div
            className={`grid-square ${
              isRoverPosition
                ? 'grid-square-rover'
                : isObstacle
                ? 'grid-square-obstacle'
                : ''
            }`}
            id={id}
            key={id}
          >
            {isRoverPosition ? getDirectionArrow(direction) : ''}
          </div>
        );
      }

      gridItems.push(
        <div key={rowsI} className="grid-rows">
          {rowItems}
        </div>
      );
    }

    return gridItems;
  };

  if (Array.isArray(obstacles) && current) {
    return <div className={className}>{renderGrid().map(item => item)}</div>;
  }

  return null;
};

const StyledGrid = styled(Grid)`
  display: inline-block;

  .grid-rows {
    height: 16px;
    margin: 0;

    .grid-square {
      border-top: 1px solid black;
      border-right: 1px solid black;
      display: inline-block;
      width: 15px;
      height: 15px;

      &:first-child {
        border-left: 1px solid black;
      }
      &-obstacle {
        background-color: black;
      }

      &-rover {
        background-color: green;
      }
    }
  }

  div:last-of-type .grid-square {
    border-bottom: 1px solid black;
  }
`;

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
  grid: getGrid(state),
  rover: getRover(state),
});

export default connect(mapStateToProps, {})(StyledGrid);
