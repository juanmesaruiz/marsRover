import React from 'react';
import { KEYBOARDS_CODES, ROVER_DIRECTION, ROVER_MOVEMENT } from './constants';

export const getRandomCoordinates = ({ x, y }, numberOfObstacles = 1) => {
  const coordinates = [];
  let i = 0;

  for (i; i < numberOfObstacles; i++) {
    coordinates.push({
      x: Math.floor(Math.random() * (x - 0)),
      y: Math.floor(Math.random() * (y - 0)),
    });
  }

  return [...new Set(coordinates)];
};

const isCoordinateInsideGrid = (grid, newPosition) =>
  newPosition.x >= 0 &&
  newPosition.x <= grid.x &&
  newPosition.y >= 0 &&
  newPosition.y <= grid.y;

const isObstacleCoordinates = (obstaclesCoordinates, newPosition) =>
  obstaclesCoordinates.findIndex(
    obstacle => obstacle.x === newPosition.x && obstacle.y === newPosition.y
  ) !== -1;

export const isCorrectMovement = ({
  obstaclesCoordinates,
  newPosition,
  grid,
}) => {
  const isObstacle = isObstacleCoordinates(obstaclesCoordinates, newPosition);
  const isInsideGrid = isCoordinateInsideGrid(grid, newPosition);

  return !isObstacle && isInsideGrid;
};

export const getNewObstaclesCoordinates = (
  grid,
  roverPosition,
  obstaclesCoordinates
) => {
  const newObstacleCoordinate = getRandomRoverPosition(grid);
  const isRoverPosition =
    newObstacleCoordinate.x === roverPosition.x &&
    newObstacleCoordinate.y === roverPosition.y;
  const obstacleAlreadyExists = isObstacleCoordinates(
    obstaclesCoordinates,
    newObstacleCoordinate
  );

  if (isRoverPosition || obstacleAlreadyExists) {
    return getNewObstaclesCoordinates(grid, roverPosition);
  }

  return newObstacleCoordinate;
};

export const getRandomRoverPosition = (grid, obstaclesCoordinates) => {
  const roverPosition = getRandomCoordinates(grid)[0];
  const isObstacle = isObstacleCoordinates(obstaclesCoordinates, roverPosition);

  if (isObstacle) {
    return getRandomRoverPosition(grid, obstaclesCoordinates);
  }

  return roverPosition;
};

export const getDirectionArrow = direction => {
  switch (direction) {
    case ROVER_DIRECTION.W:
      return <span>&#8592;</span>;

    case ROVER_DIRECTION.E:
      return <span>&#8594;</span>;

    case ROVER_DIRECTION.S:
      return <span>&#8595;</span>;

    case ROVER_DIRECTION.N:
    default:
      return <span>&#8593;</span>;
  }
};

export const getRoverMovementFromCode = code => {
  switch (code) {
    case KEYBOARDS_CODES.A:
      return ROVER_MOVEMENT.L;
    case KEYBOARDS_CODES.D:
      return ROVER_MOVEMENT.R;
    case KEYBOARDS_CODES.W:
      return ROVER_MOVEMENT.F;
    default:
      return null;
  }
};
