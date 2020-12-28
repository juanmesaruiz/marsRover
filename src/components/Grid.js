import React from 'react';
import { connect } from 'react-redux';

import { getGrid, getObstacles, getRover } from '../reducers';
import { getDirectionArrow } from '../common/helpers';

const Grid = ({ obstacles, grid: { x, y }, rover: { current, direction } }) => {
  const renderGrid = () => {
    const gridItems = [];
    const columns = x;
    const rows = y;
    let rowsI = 0;
    const obstaclesAvailable = [...obstacles];
    for (rowsI; rowsI < rows; rowsI++) {
      let columnsI = 0;
      const rowItems = [];

      for (columnsI; columnsI < columns; columnsI++) {
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
        <p key={rowsI} className="grid-rows">
          {rowItems}
        </p>
      );
    }

    return gridItems;
  };

  if (obstacles.length && current) {
    return <div>{renderGrid().map(item => item)}</div>;
  }

  return null;
};

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
  grid: getGrid(state),
  rover: getRover(state),
});

export default connect(mapStateToProps, {})(Grid);
