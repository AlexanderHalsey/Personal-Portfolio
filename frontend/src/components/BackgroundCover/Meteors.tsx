import * as React from 'react';
import { meteor } from './spaceObjects';
import useWindowDimensions from './useWindowDimensions';

const meteorSpeedDelay = 50; // ms
const startDelays = [3000, 3400, 3450, 3800]; //  ms
const repeatDelay = 7000; //ms

type Coords = [number, number];

const getNewCoords = (coords: Coords): Coords => {
  // + 1 percentage -1 pixels
  return [coords[0]+3, coords[1]-1];
}

const Meteors = () => {
  const { width, height } = useWindowDimensions();


  const [coords1, setCoords1] = React.useState(meteor.coords);

  React.useEffect(() => {
    async function meteorTrajectory(): Promise<any> {
      const meteorImage = document.getElementsByClassName("meteor")[0] as HTMLElement;
      // if meteor is at left of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords1[0] == -10) {
        await new Promise(resolve => setTimeout(resolve, startDelays[0]));
        meteorImage.style.transition = 'top ' + meteorSpeedDelay + 'ms, left '
          + meteorSpeedDelay + 'ms';
        meteorImage.style.transitionTimingFunction = 'linear';
      };

      // if meteor is in flight, give it new coords for width / height
      // if meteor arrives at the end, remove transition effect to move 
      // it back to the start without a meteor quickly flying backwards 
      if (coords1[1] > -20) {
        await new Promise(resolve => setTimeout(resolve, meteorSpeedDelay));
        setCoords1(getNewCoords(coords1));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        meteorImage.style.transition = 'none';
        setCoords1(meteor.coords);
      };
    }
    meteorTrajectory();
  }, [coords1]);


  const [coords2, setCoords2] = React.useState(meteor.coords);

  React.useEffect(() => {
    async function meteorTrajectory(): Promise<any> {
      const meteorImage = document.getElementsByClassName("meteor")[1] as HTMLElement;
      // if meteor is at left of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords2[0] == -10) {
        await new Promise(resolve => setTimeout(resolve, startDelays[1]));
        meteorImage.style.transition = 'top ' + meteorSpeedDelay + 'ms, left '
          + meteorSpeedDelay + 'ms';
        meteorImage.style.transitionTimingFunction = 'linear';
      };

      // if meteor is in flight, give it new coords for width / height
      // if meteor arrives at the end, remove transition effect to move 
      // it back to the start without a meteor quickly flying backwards 
      if (coords2[1] > -20) {
        await new Promise(resolve => setTimeout(resolve, meteorSpeedDelay));
        setCoords2(getNewCoords(coords2));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        meteorImage.style.transition = 'none';
        setCoords2(meteor.coords);
      };
    }
    meteorTrajectory();
  }, [coords2]);


  const [coords3, setCoords3] = React.useState(meteor.coords);

  React.useEffect(() => {
    async function meteorTrajectory(): Promise<any> {
      const meteorImage = document.getElementsByClassName("meteor")[2] as HTMLElement;
      // if meteor is at left of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords3[0] == -10) {
        await new Promise(resolve => setTimeout(resolve, startDelays[2]));
        meteorImage.style.transition = 'top ' + meteorSpeedDelay + 'ms, left '
          + meteorSpeedDelay + 'ms';
        meteorImage.style.transitionTimingFunction = 'linear';
      };

      // if meteor is in flight, give it new coords for width / height
      // if meteor arrives at the end, remove transition effect to move 
      // it back to the start without a meteor quickly flying backwards 
      if (coords3[1] > -20) {
        await new Promise(resolve => setTimeout(resolve, meteorSpeedDelay));
        setCoords3(getNewCoords(coords3));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        meteorImage.style.transition = 'none';
        setCoords3(meteor.coords);
      };
    }
    meteorTrajectory();
  }, [coords3]);


  const [coords4, setCoords4] = React.useState(meteor.coords);

  React.useEffect(() => {
    async function meteorTrajectory(): Promise<any> {
      const meteorImage = document.getElementsByClassName("meteor")[3] as HTMLElement;
      // if meteor is at left of screen waiting to start
      // then wait, then add smooth frame transition values
      if (coords4[0] == -10) {
        await new Promise(resolve => setTimeout(resolve, startDelays[3]));
        meteorImage.style.transition = 'top ' + meteorSpeedDelay + 'ms, left '
          + meteorSpeedDelay + 'ms';
        meteorImage.style.transitionTimingFunction = 'linear';
      };

      // if meteor is in flight, give it new coords for width / height
      // if meteor arrives at the end, remove transition effect to move 
      // it back to the start without a meteor quickly flying backwards 
      if (coords4[1] > -20) {
        await new Promise(resolve => setTimeout(resolve, meteorSpeedDelay));
        setCoords4(getNewCoords(coords4));
      } else {
        await new Promise(resolve => setTimeout(resolve, repeatDelay));
        meteorImage.style.transition = 'none';
        setCoords4(meteor.coords);
      };
    }
    meteorTrajectory();
  }, [coords4]);

  return (
    <div>
      <img 
        className="meteor"
        src={meteor.file}
        style={{
          width: meteor.size.toString() + "%",
          position: 'absolute',
          left: coords1[0].toString() + "%",
          top: coords1[1].toString() + "%",
          transform: 'rotate(' + meteor.orientation + 'deg)',
        }}
      />
      <img 
        className="meteor"
        src={meteor.file}
        style={{
          width: meteor.size.toString() + "%",
          position: 'absolute',
          left: coords2[0].toString() + "%",
          top: coords2[1].toString() + "%",
          transform: 'rotate(' + meteor.orientation + 'deg)',
        }}
      />
      <img 
        className="meteor"
        src={meteor.file}
        style={{
          width: meteor.size.toString() + "%",
          position: 'absolute',
          left: coords3[0].toString() + "%",
          top: coords3[1].toString() + "%",
          transform: 'rotate(' + meteor.orientation + 'deg)',
        }}
      />
      <img 
        className="meteor"
        src={meteor.file}
        style={{
          width: meteor.size.toString() + "%",
          position: 'absolute',
          left: coords4[0].toString() + "%",
          top: coords4[1].toString() + "%",
          transform: 'rotate(' + meteor.orientation + 'deg)',
        }}
      />
    </div>
  );
}

export default Meteors;