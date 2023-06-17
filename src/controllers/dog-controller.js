const db = require("../models");
const Dog = db.dogs;

const findAll = async (req, res) => {
    Dog.findAll() 
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving dogs."
            });
        });
}

module.exports = {
    findAll
};
