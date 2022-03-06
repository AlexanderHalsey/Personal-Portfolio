// earth, astronaut and title text rotating on changing 
// screen size
type Coords = [number, number];

const fluidPosition = (start: Coords, middle: Coords, 
    end: Coords, currentWidth: number): Coords => {

    const maxWidth = 1366;
    const minWidth = 500;
    const midWidth = (maxWidth + minWidth)/2;

    const startWidthDiff = maxWidth - midWidth;
    const endWidthDiff = midWidth - minWidth;

    const xStartDiff = (middle[0]-start[0])/startWidthDiff;
    const yStartDiff = (middle[1]-start[1])/startWidthDiff;

    const xEndDiff = (end[0]-middle[0])/endWidthDiff;
    const yEndDiff = (end[1]-middle[1])/endWidthDiff;

    if (currentWidth > midWidth) {
        const currentWidthDiff = maxWidth - currentWidth;
        return ([
            currentWidthDiff*xStartDiff+start[0], 
            currentWidthDiff*yStartDiff+start[1],
        ])
    } else {
        const currentWidthDiff = midWidth - currentWidth;
        return ([
            currentWidthDiff*xEndDiff+middle[0],
            currentWidthDiff*yEndDiff+middle[1],
        ])
    }
};

export default fluidPosition;
