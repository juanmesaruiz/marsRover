import { ROVER_DIRECTION, ROVER_MOVEMENT } from '../../../common/constants';
import { getNewRoverState } from '../roverHelpers';

describe('roverHelpers tests ', () => {
  describe('getNewRoverState', () => {
    const defaultCurrent = { x: 10, y: 10 };
    const defaultLog = [{ x: 10, y: 9 }];
    const defaultState = {
      current: defaultCurrent,
      log: defaultLog,
    };
    const defaultOptions = {
      current: defaultCurrent,
      grid: { x: 50, y: 25 },
      obstaclesCoordinates: [],
    };

    describe('ROVER_MOVEMENT.F', () => {
      const optionsMovementF = {
        ...defaultOptions,
        roverMovement: ROVER_MOVEMENT.F,
      };

      it('ROVER_DIRECTION.N', () => {
        const direction = ROVER_DIRECTION.N;
        const optionsDirectionN = {
          ...optionsMovementF,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y + 1;
        const expectedState = {
          current: expectedPosition,
          direction,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionN)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.S', () => {
        const direction = ROVER_DIRECTION.S;
        const optionsDirectionS = {
          ...optionsMovementF,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y - 1;
        const expectedState = {
          current: expectedPosition,
          direction,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionS)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.W', () => {
        const direction = ROVER_DIRECTION.W;
        const optionsDirectionW = {
          ...optionsMovementF,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x - 1;
        const expectedState = {
          current: expectedPosition,
          direction,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionW)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.E', () => {
        const direction = ROVER_DIRECTION.E;
        const optionsDirectionE = {
          ...optionsMovementF,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x + 1;
        const expectedState = {
          current: expectedPosition,
          direction,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionE)).toEqual(expectedState);
      });

      it('default', () => {
        const direction = undefined;
        const optionsDirection = {
          ...optionsMovementF,
          direction,
          state: { ...defaultState },
        };

        expect(getNewRoverState(optionsDirection)).toEqual(defaultState);
      });
    });

    describe('ROVER_MOVEMENT.L', () => {
      const optionsMovementL = {
        ...defaultOptions,
        roverMovement: ROVER_MOVEMENT.L,
      };

      it('ROVER_DIRECTION.N', () => {
        const direction = ROVER_DIRECTION.N;
        const optionsDirectionN = {
          ...optionsMovementL,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x - 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.W,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionN)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.S', () => {
        const direction = ROVER_DIRECTION.S;
        const optionsDirectionS = {
          ...optionsMovementL,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x + 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.E,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionS)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.W', () => {
        const direction = ROVER_DIRECTION.W;
        const optionsDirectionW = {
          ...optionsMovementL,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y - 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.S,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionW)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.E', () => {
        const direction = ROVER_DIRECTION.E;
        const optionsDirectionE = {
          ...optionsMovementL,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y + 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.N,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionE)).toEqual(expectedState);
      });

      it('default', () => {
        const direction = undefined;
        const optionsDirection = {
          ...optionsMovementL,
          direction,
          state: { ...defaultState },
        };

        expect(getNewRoverState(optionsDirection)).toEqual(defaultState);
      });
    });

    describe('ROVER_MOVEMENT.R', () => {
      const optionsMovementR = {
        ...defaultOptions,
        roverMovement: ROVER_MOVEMENT.R,
      };

      it('ROVER_DIRECTION.N', () => {
        const direction = ROVER_DIRECTION.N;
        const optionsDirectionN = {
          ...optionsMovementR,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x + 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.E,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionN)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.S', () => {
        const direction = ROVER_DIRECTION.S;
        const optionsDirectionS = {
          ...optionsMovementR,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.x = expectedPosition.x - 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.W,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionS)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.W', () => {
        const direction = ROVER_DIRECTION.W;
        const optionsDirectionW = {
          ...optionsMovementR,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y + 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.N,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionW)).toEqual(expectedState);
      });

      it('ROVER_DIRECTION.E', () => {
        const direction = ROVER_DIRECTION.E;
        const optionsDirectionE = {
          ...optionsMovementR,
          direction,
          state: { ...defaultState, direction },
        };
        const expectedPosition = { ...defaultOptions.current };
        expectedPosition.y = expectedPosition.y - 1;
        const expectedState = {
          current: expectedPosition,
          direction: ROVER_DIRECTION.S,
          log: [defaultOptions.current, ...defaultLog],
        };

        expect(getNewRoverState(optionsDirectionE)).toEqual(expectedState);
      });

      it('default', () => {
        const direction = undefined;
        const optionsDirection = {
          ...optionsMovementR,
          direction,
          state: { ...defaultState },
        };

        expect(getNewRoverState(optionsDirection)).toEqual(defaultState);
      });
    });

    it('default', () => {
      const optionsMovement = {
        ...defaultOptions,
        roverMovement: undefined,
        direction: undefined,
        state: { ...defaultState },
      };

      expect(getNewRoverState(optionsMovement)).toEqual(defaultState);
    });
  });
});
