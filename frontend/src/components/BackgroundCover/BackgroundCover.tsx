import * as React from 'react';

import { 
    stars,
    fixedObjects,
} from './params';

import useWindowDimensions from './useWindowDimensions';


const BackgroundCover = () => {
    const { height, width } = useWindowDimensions();

    return (
      <div>
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
              }}
            />
          )
        })}
      </div>
    )
}

export default BackgroundCover;