import * as fs from 'fs';

fs.readFile('day02a.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    else {
        console.log('Day02: Problem 1')
        let lines = data.split('\n');
        let horizontal = 0;
        let vertical = 0;
        for (let direction of lines) {
            let [command, val] = direction.split(' ');
            if (command.includes('forward')){
                horizontal += parseInt(val);
            } else if (command.includes('up')) {
                vertical -= parseInt(val);
            } else if (command.includes('down')) {
                vertical += parseInt(val);
            }
        }
        console.log(horizontal * vertical)
    }
});


fs.readFile('day02a.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    else {
        console.log('Day02: Problem 1')
        let lines = data.split('\n');
        let horizontal = 0;
        let vertical = 0;
        let aim = 0;
        for (let direction of lines) {
            let [command, val] = direction.split(' ');
            if (command.includes('forward')){
                horizontal += parseInt(val);
                vertical += aim * parseInt(val);
            } else if (command.includes('up')) {
                aim -= parseInt(val);
            } else if (command.includes('down')) {
                aim += parseInt(val);
            }
        }
        console.log(horizontal * vertical)
    }
});