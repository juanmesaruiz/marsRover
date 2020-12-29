const state = {
  grid: {
    x: 10,
    y: 5,
  },
  obstacles: [
    {
      x: 0,
      y: 3,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: 4,
      y: 4,
    },
    {
      x: 3,
      y: 3,
    },
    {
      x: 1,
      y: 4,
    },
  ],
  rover: {
    current: {
      x: 2,
      y: 2,
    },
    direction: 'east',
    log: [
      'Obstacle - X 0, Y 3',
      {
        x: 0,
        y: 1,
      },
      {
        x: 0,
        y: 0,
      },
    ],
  },
};

export default state;
