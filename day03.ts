import * as fs from 'fs';

fs.readFile('day03a.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    else {
        console.log('Day03: Problem 1')
        let lines = data.split('\n');
        let zeroes = new Array(lines[0].length).fill(0);
        let ones = new Array(lines[0].length).fill(0);
        lines.map(line => {
            let lineArray = line.split('');
            lineArray.forEach((value, index) => {
                if (value === '0') {
                    zeroes[index]++;
                } else {
                    ones[index]++;
                }
            })
        })
        
        let commonBinary = '';
        for (let i = 0; i < zeroes.length; i++) {
            if (zeroes[i] > ones[i]) {
                commonBinary += '0';
            } else {
                commonBinary += '1';
            }
        }
        let commonBinaryValue = parseInt(commonBinary, 2);
        console.log(commonBinaryValue);
    }
});
