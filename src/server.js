const express = require('express');
const bodyParser = require('body-parser');
const Fixtures = require('sequelize-fixtures');
const path = require("path");
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const db = require("./models");
const dogRoutes = require("./routes/dog-routes");

var corsOptions = {
    origin: "http://localhost:8081"
};

dotenv.config();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ping
app.get("/ping", (req, res) => {
    res.json({message: "Dogshouseservice.Version1.0.1"});
});

app.use('/', dogRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" })
});

app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({message})
});

const PORT = process.env.PORT || 8080;

const start = async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync();
        await Fixtures.loadFile(path.resolve(path.join(__dirname, 'fixtures/dogs.json')), { 'Dog': db.dogs })
        app.listen(PORT, () => console.log(`🌎 Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();