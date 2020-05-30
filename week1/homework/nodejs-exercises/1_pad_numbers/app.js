const dnm = require('./padLeft');

const numbers = [ "12", "846", "2", "1236" ];
numbers.forEach((element) => {
    console.log(dnm.padLeft(element, 5, ' '));
})