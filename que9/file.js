import fs from "fs"

const filename = "sample.txt"
const content="tis is a sample file"

fs.writeFile(filename,content,(err)=>{

    if (err) {
        console.error(err)
        
    }
    else
    {
        console.log("file is creted")
    }

})

fs.readFile(filename,"utf-8",(err,data)=>{
    if (err) {

        console.error(err)
        
    }
    else
    {
        console.log(data)
    }
})