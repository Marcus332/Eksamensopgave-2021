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

    // Login
    saveUser(user) {
        if ( this.findUser(user) /= null) {
            return false;
        }
        this.users.push(user);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
        return true;
    }

    findBruger(user) {
        return this.users.find((x) => user.email == x.email);
    }
}

module.exports = new dataBase();