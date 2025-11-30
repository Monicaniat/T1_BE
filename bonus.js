function createCounter(init) {
    let count = init;
    const initialValue = init;
    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        reset: function() {
            count = initialValue;
            return count;
        }
    };
}

console.log("Example 1:");
const counter1 = createCounter(5);
const output = [
    counter1.increment(), 
    counter1.reset(),     
    counter1.decrement()  
];
console.log(`[${output.join(',')}]`);

console.log("Example 2:");
const counter2 = createCounter(0);
const output2 = [
    counter2.increment(), 
    counter2.increment(), 
    counter2.decrement(), 
    counter2.reset(),     
    counter2.reset()      
];
console.log(`[${output2.join(',')}]`); 
