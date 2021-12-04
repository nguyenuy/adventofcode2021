import * as fs from 'fs';

let previousMeasurement: any = null;
let currentMeasurement: any = null;

let numIncreases = 0;

fs.readFile('./day01.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const lines = data.split('\n');
        lines.forEach(line => {
            currentMeasurement = parseInt(line);
            if (previousMeasurement) {
                if (currentMeasurement > previousMeasurement) {
                    numIncreases++;
                    //console.log(numIncreases);
                }
            }
            previousMeasurement = currentMeasurement;

        });
    }
    console.log(numIncreases);
});