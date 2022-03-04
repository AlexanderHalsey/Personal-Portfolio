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
                // values set at max 98 percent so that star width
                // is accomodated in frame
                Math.floor(Math.random() * 99),
                Math.floor(Math.random() * 99),
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
const starType1: Star = starType("starType1", 216, 10, [5, 10], 
    ["star_11.png", "star_3.png", "star_7.png", "star_5.png", 
     "star_3.png", "star_15.png"])

const starType2: Star = starType("starType2", 4, 180, [30, 35],
    ["star_12.png", "star_13.png", "star_14.png", "star_16.png"]) 

const starType3: Star = starType("starType3", 16, 10, [15, 20],
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
    orientation: number | null,
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

const sun: FixedObject = fixedObject("sun", 100, [5, 7], 0, 
                                     "sun/sun.png");

const ufo: FixedObject = fixedObject("ufo", 50, [62, 6], 0,
                                     "ufo/ufo.png");

const rocket_ship: FixedObject = fixedObject("rocket_ship", 130,
                                             [67, 71], 315,
                                             "rocket_ship/rocket_ship.png");

const galaxy: FixedObject = fixedObject("galaxy", 100, [89, 78],
                                        0, "galaxy/galaxy.png");

const meteors: FixedObject = fixedObject("meteors", 100, [1, 31], 0,
                                         "meteors/meteor.png");

const astronaut: FixedObject = fixedObject("astronaut",120, [51, 31],
                                           0, "astronaut/astronaut.png");

const alien: FixedObject = fixedObject("alien", 150, [-4, 70], 270, 
                                       "alien/alien.png");

const earth: FixedObject = fixedObject("earth", 80, [62, 39], 0,
                                       "earth/earth.png");

const mars: FixedObject = fixedObject("mars", 60, [47, 6], 0,
                                      "planets/mars.png");

const mercury: FixedObject = fixedObject("mercury", 45, [85, 31], 0,
                                         "planets/mercury.png");

const neptune: FixedObject = fixedObject("neptune", 70, [12, 42], 0,
                                         "planets/neptune.png");

const saturn: FixedObject = fixedObject("saturn", 70, [87, 4], 0,
                                        "planets/saturn.png");

const uranus: FixedObject = fixedObject("uranus", 60, [40, 56], 0,
                                        "planets/uranus.png");

const venus: FixedObject = fixedObject("venus", 85, [21, 73], 0,
                                       "planets/venus.png");

export const fixedObjects: Array<FixedObject> = [
   sun, ufo, rocket_ship, galaxy, meteors, astronaut,
   alien, earth, mars, mercury, neptune, saturn, 
   uranus, venus  
]