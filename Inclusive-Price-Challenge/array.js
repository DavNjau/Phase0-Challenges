/*
const inclusivePrice(exclusivePrice, taxRate) = () => {
    console.log(inclusivePrice())
    };

const inclusivePrice = exclusivePrice + (exclusivePrice * taxRate);
*/

/*
my initial problem was that i used console log inside the function instead of returning the value
and then i was trying to log the function call which was returning undefined
*/

const exclusivePrice = [1000, 2000, 3000];
const taxRate = 0.16;

function inclusivePrice(exclusive, taxRate) {
    return exclusive + (exclusive * taxRate);
}

for (const excl of exclusivePrice) {
     console.log(inclusivePrice(excl, taxRate));
}
