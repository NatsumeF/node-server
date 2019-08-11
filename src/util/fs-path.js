const fs = require("fs");

let writeFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, function (error) {
            if (error) {
                console.log(error)
                reject()
            } else {
                resolve()
            }
        })
    })
}



let readFile = (path, type = "utf-8") => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, type, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports ={
    readFile,
    writeFile
}