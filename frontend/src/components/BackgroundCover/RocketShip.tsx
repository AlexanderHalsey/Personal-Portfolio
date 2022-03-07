import * as React from 'react';
import { rocketShip } from './spaceObjects';
import useWindowDimensions from './useWindowDimensions';

const rocketSpeedDelay = 150; //ms
const startDelay = 2000; //ms
const repeatDelay = 6000; //ms

type Coords = [number, number];

const getNewCoords = (coords: Coords): Coords => {
  // + 1 percentage -2 pixels
  return [coords[0]+1, coords[1]-2];
}

const RocketShip = () => {
  const { width, height } = useWindowDimensions();
  const [coords, setCoords] = React.useState(rocketShip.coords);

  React.useEffect(() => {
    const rocket = document.getElementsByClassName("rocket")[0] as HTMLElement;
    async function trajectory(): Promise<any> {
      // if rocket is at bottom of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords[1] == 100) {
        await new Promise(resolve => setTimeout(resolve, startDelay))
        rocket.style.transition = 'top ' + rocketSpeedDelay + 'ms, left ' 
          + rocketSpeedDelay + 'ms';
      };

      // if rocket is in flight, give it new coords for width / height
      // if rocket arrive at the end, remove transition effect to move 
      // it back to the start without a rocket quickly flying backwards 
      if (coords[0] < 100) {
        await new Promise(resolve => setTimeout(resolve, rocketSpeedDelay));
        setCoords(getNewCoords(coords));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        rocket.style.transition = 'none';
        setCoords(rocketShip.coords);
      };
    }
    trajectory();
  }, [coords]);

  return (
    <img 
      key={rocketShip.name}
      className="rocket"
      src={rocketShip.file}
      style={{
        width: Math.floor(rocketShip.size * width / 1366),
        position: 'absolute',
        left: coords[0].toString() + "%",
        top: Math.floor(coords[1] / 100 * (625-75)),
        transform: 'rotate(' + rocketShip.orientation + 'deg)',
        transitionTimingFunction: 'linear',

      }}
    />
  );
}

export default RocketShip;