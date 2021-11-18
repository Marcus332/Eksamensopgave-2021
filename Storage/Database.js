var fs = require("fs");
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/brugere.json";

class dataBase {
    constructor() {
        this.users = this.openFile(USER_FILE);
    }
    //Save file
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }

    //Open file
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
        return JSON.parse(file);
    }
}