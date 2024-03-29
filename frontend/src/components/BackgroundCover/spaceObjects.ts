// image directory
const BASE_DIR = 'static/background_cover/clip_art/';


// star type 
type Star = {
    name: string,
    total: number,
    sizeRange: [number, number],
    stars: {
        id: string,
        coords: [number, number],
        width: number,
        orientation: number,
        mirror: number,
        file: string,
    }[],
};

// object to be created for each star type
const starType = (name: string, total: number, rotation_step: number, 
                  sizeRange: [number, number], files: string[])
: Star => {
    var stars: Star["stars"] = [];
    var files_full = files.map((image) => (
        BASE_DIR + "/stars/" + image
    ));
    for (let i=0; i < total; i++) {
        // set a bunch of values that act directly with the display window
        stars.push({
            id: name + i,
            coords: [
                // values set at max 97 percent so that star width
                // and star height is accomodated in frame
                Math.floor(Math.random() * 97)+1,
                Math.floor(Math.random() * 97)+1,
            ],
            width: Math.floor(Math.random() * (sizeRange[1] - 
                sizeRange[0]) + sizeRange[0]),
            orientation: Math.floor((Math.random() * 360)
                /rotation_step)*rotation_step,
            mirror: Math.random() < 0.5 ? -1 : 1,
            file: files_full[i%files.length]
        });
    }

    return ({
        name: name,
        total: total,
        sizeRange: sizeRange,
        stars: stars,
    })
}

// stars to be generated randomly on page
const starType1: Star = starType("starType1", 120, 10, [6, 11], 
    ["star_11.png", "star_3.png", "star_7.png", "star_5.png", 
     "star_3.png", "star_15.png"])

const starType2: Star = starType("starType2", 4, 180, [25, 35],
    ["star_12.png", "star_13.png", "star_14.png", "star_16.png"]) 

const starType3: Star = starType("starType3", 16, 10, [11, 16],
    ["star_18.png", "star_19.png", "star_20.png", "star_10.png",
     "star_21.png", "star_9.png", "star_17.png", "star_8.png" ])

export const stars: Array<Star> = [
    starType1,
    starType2,
    starType3
]


// fixed object type
type FixedObject = {
    name: string,
    size: number,
    coords: [number, number],
    orientation: number,
    file: string
};

// object to be created for each fixed object
const fixedObject = (name: string, size: number, coords:
                     [number, number], orientation: number,
                     file: string): FixedObject => {
    return ({
        name: name,
        size: size,
        coords: coords,
        orientation: orientation,
        file: BASE_DIR + file
    })
}

const sun: FixedObject = fixedObject("sun", 7, [5, 7], 0, 
                                     "sun/sun.png");

const ufo: FixedObject = fixedObject("ufo", 3, [62, 6], 0,
                                     "ufo/ufo.png");

export const rocketShip: FixedObject = fixedObject("rocket_ship", 9,
                            [53, 100], 45, "rocket_ship/rocket_ship.png");

const galaxy: FixedObject = fixedObject("galaxy", 9, [89, 71],
                                        0, "galaxy/galaxy.png");

export const meteor: FixedObject = fixedObject("meteors", 1, [-10, 11], 210,
                                         "meteors/meteor.png");

const alien: FixedObject = fixedObject("alien", 11, [-4, 60], 90, 
                                       "alien/alien.png");

const mars: FixedObject = fixedObject("mars", 4, [47, 6], 0,
                                      "planets/mars.png");

const mercury: FixedObject = fixedObject("mercury", 3, [85, 31], 0,
                                         "planets/mercury.png");

const neptune: FixedObject = fixedObject("neptune", 5, [12, 42], 0,
                                         "planets/neptune.png");

const saturn: FixedObject = fixedObject("saturn", 4.5, [87, 4], 0,
                                        "planets/saturn.png");

const uranus: FixedObject = fixedObject("uranus", 4, [40, 56], 0,
                                        "planets/uranus.png");

const venus: FixedObject = fixedObject("venus", 6.5, [21, 68], 0,
                                       "planets/venus.png");

export const fixedObjects: Array<FixedObject> = [
   sun, ufo, galaxy, alien, mars, mercury, 
   neptune, saturn, uranus, venus  
]

// fluid objects that move with screen size
interface FluidObject extends FixedObject {
    midWidthCoords: [number, number],
    minWidthCoords: [number, number]
}

const fluidObject = (name: string, size: number, 
  maxWidthCoords: [number, number], midWidthCoords: [number, number], 
  minWidthCoords: [number, number], orientation: number, file: string): 
  FluidObject => {
    return ({
       name: name,
       size: size,
       coords: maxWidthCoords,
       midWidthCoords: midWidthCoords,
       minWidthCoords: minWidthCoords,
       orientation: orientation,
       file: BASE_DIR + file 
    });
}

export const astronaut: FluidObject = fluidObject("astronaut", 140, [49, 34], 
                                           [39, 51], [9, 48], 0, 
                                           "astronaut/astronaut.png", );

export const earth: FluidObject = fluidObject("earth", 100, [62, 41], [61, 58],
                                       [43, 55], 0, "earth/earth.png");
