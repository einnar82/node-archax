// Ensure that the process is started with `--expose-gc`
if (typeof global.gc !== 'function') {
    console.log('Please run the script with `--expose-gc` flag to enable manual garbage collection.');
    process.exit();
}

function triggerGarbageCollection() {
    console.log('Triggering garbage collection...');
    global.gc(); // Manually trigger garbage collection
    console.log('Garbage collection triggered.');
}

// Simulate some memory usage
let largeArray = [];
for (let i = 0; i < 100000; i++) {
    largeArray.push(new Array(1000).fill('data'));
}

console.log('Simulated memory usage.');
console.log('Before GC: Memory usage:', process.memoryUsage().heapUsed);

// Trigger GC after some delay
setTimeout(() => {
    triggerGarbageCollection();
    console.log('After GC: Memory usage:', process.memoryUsage().heapUsed);
}, 1000);
