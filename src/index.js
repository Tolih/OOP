const dotenv = require('dotenv');
dotenv.config();

const Application = require('./Application');
const app = new Application();
app.start();
