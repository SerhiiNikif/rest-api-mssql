const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require("./models");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ping
app.get("/ping", (req, res) => {
    res.json({message: "Dogshouseservice.Version1.0.1"});
});

const PORT = process.env.PORT || 80;

const start = async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync();
        app.listen(PORT, () => console.log(`🌎 Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();