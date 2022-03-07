import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { 
    stars,
    fixedObjects,
    fluidObjects,
} from './spaceObjects';

import useWindowDimensions from './useWindowDimensions';
import fluidPosition from './utils';
import RocketShip from './RocketShip';
import Meteors from './Meteors';


const BackgroundCover = () => {
  const { width, height } = useWindowDimensions();
  const [ titleNameWidth, titleNameHeight ] = fluidPosition(
    [25, 39], [20, 23], [25, 12], width);
  const [ titleDescWidth, titleDescHeight ] = fluidPosition(
    [25, 50], [20, 34], [25, 22], width);


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
                    width: Math.floor(star.width * width / 1366), 
                    left: star.coords[0].toString() + "%", 
                    top: Math.floor(star.coords[1] / 100 * (625-75)), 
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
              width: Math.floor(obj.size * width / 1366),
              position: 'absolute',
              left: obj.coords[0].toString() + "%",
              top: Math.floor(obj.coords[1] / 100 * (625-75)),
              transform: 'rotate(' + obj.orientation + 'deg)',
            }}
          />
        )
      })}

      {fluidObjects.map((obj) => {
        const [ w, h ] = fluidPosition(obj.coords, 
            obj.midWidthCoords, obj.minWidthCoords, width);
        return (
          <img 
            key={obj.name}
            src={obj.file}
            style={{
              width: obj.size,
              position: 'absolute',
              left: w.toString() + "%",
              top: Math.floor(h / 100 * (625-75)),
              transform: 'rotate(' + obj.orientation + 'deg)',
            }}
          />
        )
      })}
      <RocketShip />
      <Meteors />
      <h1 
        className="titleName"
        style={{
          position: "absolute",
          left: titleNameWidth.toString() + "%",
          top: Math.floor(titleNameHeight / 100 * (625-75)),
        }}
      >
        I'm Alex Halsey
      </h1>
      <h3 
        className="titlePosition"
        style={{
          position: "absolute",
          left: titleDescWidth.toString() + "%",
          top: Math.floor(titleDescHeight / 100 * (625-75)),
        }}
      >
        A Junior Web Developper
      </h3>
    </div>
  )
}

export default BackgroundCover;