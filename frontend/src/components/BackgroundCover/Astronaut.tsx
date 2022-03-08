import * as React from 'react';
import { astronaut, earth } from './spaceObjects';
import useWindowDimensions from './useWindowDimensions';

const astronautSpeedDelay = 300; // ms


type Coords = [number, number];

const getNewCoords = (coords: Coords, count: number): [Coords, number] => {
  const earth_center = [
    earth.coords[0]+Math.floor(earth.size/28), // /(1400/100*2)
    earth.coords[1]+Math.floor(earth.size/28),
  ];
  const radius = 12;
  const steps = 1000;

  if (count === steps) count = 0;

  const newCoords: [number, number] = [
    earth_center[0] - 10 - radius * Math.cos(count/steps*360),
    earth_center[1] - 10 - radius * Math.sin(count/steps*360),
  ]
  return [newCoords, count+1];
}

const Astronaut = () => {
  const { width, height } = useWindowDimensions();
  const [coords, setCoords] = React.useState(astronaut.coords);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    async function astronautTrajectory(): Promise<any> {
      await new Promise(resolve => setTimeout(resolve, astronautSpeedDelay));
      const [newCoords, newCount] = getNewCoords(coords, count);
      setCoords(newCoords);
      setCount(newCount);
    }
    astronautTrajectory();
  }, [coords, count]);

  return (
    <img 
      key={astronaut.name}
      className="astronaut"
      src={astronaut.file}
      style={{
        width: astronaut.size,
        position: 'absolute',
        left: coords[0].toString() + "%",
        top: coords[1].toString() + "%",
        transform: 'rotate(' + astronaut.orientation + 'deg)',
        transition: 'top ' + astronautSpeedDelay + 'ms, left ' 
          + astronautSpeedDelay + 'ms',
        transitionTimingFunction: 'linear',
      }}
    />
  );
}

export default Astronaut;