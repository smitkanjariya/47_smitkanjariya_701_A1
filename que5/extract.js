const fs = require("fs");
const unzipper = require("unzipper");

async function extractZip(zipPath, outputFolder) {
    fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: outputFolder }))
        .on("close", () => {
            console.log(` Extracted ${zipPath} to ${outputFolder}`);
        })
        .on("error", (err) => {
            console.error(" Error extracting zip:", err);
        });
}

const zipFile = "./photozip.zip";    
const outputFolder = "./extracted";   

extractZip(zipFile, outputFolder);
