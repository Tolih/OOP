const http = require('http');

export default class Server {
    static host;
    static port;
    static http;

    static start() {
        this.host = process.env.HOST;
        this.port = process.env.PORT;
        this.#createServer();
    }

    static #createServer() {
        this.http = http.createServer();
        this.http.listen(
            this.port,
            console.log(`Server running on http://${this.host}:${this.port}`)
        )
    }
}