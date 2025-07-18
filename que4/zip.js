const fs = require("fs");
const archiver = require("archiver");

function createZip(folderPath, outputZip) {
  
    const output = fs.createWriteStream(outputZip);
    const archive = archiver("zip", {
        zlib: { level: 9 } 
    });

   
    output.on("close", () => {
        console.log(` Zip file created successfully: ${outputZip}`);
        console.log(`Total size: ${archive.pointer()} bytes`);
    });

    archive.on("error", (err) => {
        throw err;
    });

    archive.pipe(output);

    archive.directory(folderPath, false);

    archive.finalize();
}

const folderPath = "./photo";  
const outputZip = "./photozip.zip"; 

createZip(folderPath, outputZip);
