const fs = require("fs");
const util = require("util");


const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`File '${filePath}' deleted successfully.`);
    } catch (err) {
        console.error(`Error deleting file: ${err.message}`);
    }
}

// Example usage
const filePath = "./test.txt"; // Change this to your file name
deleteFile(filePath);
