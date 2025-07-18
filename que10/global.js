
console.log("Current File Path (__filename):", __filename);

console.log("Current Directory (__dirname):", __dirname);

global.myValue = 100;
console.log("Global Variable (global.myValue):", global.myValue);

// setTimeout is a global function
setTimeout(() => {
    console.log("This message is printed after 2 seconds using setTimeout.");
}, 2000);

console.log("Node.js Version (process.version):", process.version);
console.log("Platform (process.platform):", process.platform);
console.log("Memory Usage:", process.memoryUsage());

// Using Buffer (another global)
const buf = Buffer.from("Mitthu rocks!");
console.log("Buffer Output:", buf.toString());
