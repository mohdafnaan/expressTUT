import fs from "fs/promises"

async function allMethods() {
    try {
        let folderName = "test"
        let fileName = "hi.txt"
        let reNameFile = "bye.txt"
        let fileKaContent = "hello cfi students"
        let filepathLs = "/home/afnaan/nodejs/learnnode"

        //1. create a folder
        // await fs.mkdir(folderName);
        // console.log("folder created");

        //2. delete folder
        // await fs.rmdir(folderName);
        // console.log("deleted a folder");

        //3. create file and add content
        await fs.writeFile(fileName,fileKaContent);
        console.log("created a file and added a content");

        // //4. read file
        // let output = await fs.readFile(fileName , "utf-8");
        // console.log(output);

        // //5. rename file
        await fs.rename(fileName,reNameFile);
        console.log("renamed file name");

        // //6. delete file
        // await fs.unlink(reNameFile);
        // console.log("file deleted");

        //7. List of files (ls)
        // let ls = await fs.readdir(filepathLs);
        // console.log(ls);

        //8. update file content
        await fs.appendFile(reNameFile, "\n kuch add kra re bhai\n")
         console.log("content updated");
    } catch (error) {
       console.log(error);     
    }
}
allMethods();