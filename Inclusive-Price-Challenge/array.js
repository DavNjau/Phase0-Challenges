/*
const inclusivePrice(exclusivePrice, taxRate) = () => {
    console.log(inclusivePrice())
    };

const inclusivePrice = exclusivePrice + (exclusivePrice * taxRate);
*/

const exclusivePrice = [1000, 2000, 3000];
const taxRate = 0.16;

function inclusivePrice(exclusive, taxRate) {
    return exclusive + (exclusive * taxRate);
}

for (const excl of exclusivePrice) {
     console.log(inclusivePrice(excl, taxRate));
}
