import * as React from 'react';
import { meteor } from './spaceObjects';
import useWindowDimensions from './useWindowDimensions';

const meteorSpeedDelay = 500; //ms
const startDelay = 2000; //ms
const repeatDelay = 6000; //ms

type Coords = [number, number];

const getNewCoords = (coords: Coords): Coords => {
  // + 2 percentage -1 pixels
  return [coords[0]+3, coords[1]-1];
}

const Meteors = () => {
  const { width, height } = useWindowDimensions();
  const [coords, setCoords] = React.useState(meteor.coords);

  React.useEffect(() => {
    const meteorImage = document.getElementsByClassName("meteor")[0] as HTMLElement;
    async function meteorTrajectory(): Promise<any> {
      console.log(coords);
      // if meteor is at left of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords[0] == -10) {
        await new Promise(resolve => setTimeout(resolve, startDelay))
        meteorImage.style.transition = 'top ' + meteorSpeedDelay + 'ms, left ' 
          + meteorSpeedDelay + 'ms';
      };

      // if meteor is in flight, give it new coords for width / height
      // if meteor arrives at the end, remove transition effect to move 
      // it back to the start without a meteor quickly flying backwards 
      if (coords[1] > -20) {
        await new Promise(resolve => setTimeout(resolve, meteorSpeedDelay));
        setCoords(getNewCoords(coords));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        meteorImage.style.transition = 'none';
        setCoords(meteor.coords);
      };
    }
    meteorTrajectory();
  }, [coords]);

  return (
    <img 
      key={meteor.name}
      className="meteor"
      src={meteor.file}
      style={{
        width: Math.floor(meteor.size * width / 1366),
        position: 'absolute',
        left: coords[0].toString() + "%",
        top: Math.floor(coords[1] / 100 * (625-75)),
        transform: 'rotate(' + meteor.orientation + 'deg)',
        transitionTimingFunction: 'linear',

      }}
    />
  );
}

export default Meteors;