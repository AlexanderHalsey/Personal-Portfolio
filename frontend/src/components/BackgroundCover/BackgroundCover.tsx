import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { 
    stars,
    fixedObjects,
    earth,
} from './spaceObjects';

import useWindowDimensions from './useWindowDimensions';
import fluidPosition from './utils';
import RocketShip from './RocketShip';
import Meteors from './Meteors';
import Astronaut from './Astronaut';


const BackgroundCover = () => {
  const { width, height } = useWindowDimensions();
  const [ titleNameWidth, titleNameHeight ] = fluidPosition(
    [25, 39], [20, 23], [25, 12], width);
  const [ titleDescWidth, titleDescHeight ] = fluidPosition(
    [25, 50], [20, 34], [25, 22], width);
  const [ earthWidth, earthHeight ] = fluidPosition(earth.coords, 
    earth.midWidthCoords, earth.minWidthCoords, width);


  return (
    <div 
      className="backgroundCover"
      style={{
        top: 75,
        height: window.innerHeight - 75,
      }}
    >
      {stars.map((starType) => {
        return (
          <div key={starType.name}>
            {starType.stars.map((star) => {
              return (
                <img 
                  key={star.id}
                  src={star.file}
                  style={{
                    position: 'absolute',
                    width: Math.floor(star.width * width / 1400), 
                    left: star.coords[0].toString() + "%", 
                    top: star.coords[1].toString() + "%", 
                    transform: 'rotate(' + star.orientation + 
                      'deg) scaleX(' + star.mirror +')',
                  }}
                />
              )
            })}
          </div>
        )   
      })}

      {fixedObjects.map((obj) => {
        return (
          <img 
            key={obj.name}
            src={obj.file}
            style={{
              width: obj.size.toString() + "%",
              position: 'absolute',
              left: obj.coords[0].toString() + "%",
              top: obj.coords[1].toString() + "%",
              transform: 'rotate(' + obj.orientation + 'deg)',
            }}
          />
        )
      })}

      <img 
        key={earth.name}
        src={earth.file}
        style={{
          width: earth.size,
          position: 'absolute',
          left: earthWidth.toString() + "%",
          top: earthHeight.toString() + "%",
          transform: 'rotate(' + earth.orientation + 'deg)',
        }}
      />

      <RocketShip />
      <Meteors />
      <Astronaut />

      <h1 
        className="titleName"
        style={{
          position: "absolute",
          left: titleNameWidth.toString() + "%",
          top: titleNameHeight.toString() + "%",
        }}
      >
        I'm Alex Halsey
      </h1>
      <h3 
        className="titlePosition"
        style={{
          position: "absolute",
          left: titleDescWidth.toString() + "%",
          top: titleDescHeight.toString() + "%",
        }}
      >
        A Junior Web Developper
      </h3>
    </div>
  )
}

export default BackgroundCover;