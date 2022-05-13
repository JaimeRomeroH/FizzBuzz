const fs = require("fs");
class Reader{
    static readJsonFile(filePath){
      
        let rawdata = fs.readFileSync(filePath);
        let explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = Reader;