import readline from 'readline';
import findPairs  from './findPairs.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a list of numbers separated by commas: ', (list) => {
    rl.question('Enter a target sum: ', (target) => {
        console.log(findPairs(list, target));
        rl.close();
    });
}
);


