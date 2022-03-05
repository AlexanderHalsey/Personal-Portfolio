import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { 
    stars,
    fixedObjects,
    fluidObjects,
} from './spaceObjects';

import useWindowDimensions from './useWindowDimensions';


// earth, astronaut and title text rotating on changing 
// screen size
type Coord = [number, number];

const fluidPosition = (initial: Coord, final: Coord, 
    currentWidth: number): Coord => {

    const maxWidth = 1366;
    const minWidth = 500;
    const maxWidthDiff = maxWidth - minWidth;
    const xDiff = (final[0]-initial[0])/maxWidthDiff;
    const yDiff = (final[1]-initial[1])/maxWidthDiff;

    const currentWidthDiff = maxWidth - currentWidth;
    return ([
        currentWidthDiff*xDiff+initial[0], 
        currentWidthDiff*yDiff+initial[1],
    ])
};


const BackgroundCover = () => {
    const { width, height } = useWindowDimensions();
    const [ titleNameWidth, titleNameHeight ] = fluidPosition(
        [25, 39], [25, 19], width);
    const [ titlePosWidth, titlePosHeight ] = fluidPosition(
        [25, 50], [25, 30], width);
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
                      width: star.width,
                      left: star.coords[0].toString() + "%",
                      top: star.coords[1].toString() + "%",
                      transform: 'rotate(' + star.orientation + 
                        'deg) scaleX(' + star.mirror + ')',
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
                width: obj.size,
                position: 'absolute',
                left: obj.coords[0].toString() + "%",
                top: obj.coords[1].toString() + "%",
                transform: 'rotate(' + obj.orientation + 'deg)',
              }}
            />
          )
        })}
        {fluidObjects.map((obj) => {
          const [ w, h ] = fluidPosition(obj.coords, 
              obj.minWidthCoords, width);
          return (
            <img 
              key={obj.name}
              src={obj.file}
              style={{
                width: obj.size,
                position: 'absolute',
                left: w.toString() + "%",
                top: h.toString() + "%",
                transform: 'rotate(' + obj.orientation + 'deg)',
              }}
            />
          )
        })}
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
            left: titlePosWidth.toString() + "%",
            top: titlePosHeight.toString() + "%"
          }}
        >
          A Junior Web Developper
        </h3>
      </div>
    )
}

export default BackgroundCover;