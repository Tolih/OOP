const Server = require("./modules/ServerModule");
// const Database = require("./modules/DBModule");

class Application {

    static server;
    // static database;

    static start() {
        // this.databaseConnect();
        this.#startServer();
    }

    /*static #databaseConnect() {
        try {
            this.database = Database.connect(`${process.env.DB_URL}`);
        } catch (error) {
            throw error;
        }
    }*/

    static #startServer() {
        this.server = new Server();
        this.server.start();
    }
}
exports.Application = Application;