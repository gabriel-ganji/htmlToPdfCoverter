const fs = require("fs");
const util = require("util");

// let newFunction = util.promisify();

class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }


    async Read(filepath){

        try {
            return await this.reader(filepath, {encoding: "utf-8"})
        } catch {
            return undefined;
        }

    }
}

module.exports = Reader;