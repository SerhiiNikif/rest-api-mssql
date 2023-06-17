const Joi = require('joi');

const dogModel = (sequelize, Sequelize) => {

    const Dog = sequelize.define("dog", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tail_length: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        weight: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Dog;
};

const dogAdd = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    color: Joi.string().min(2).max(255).required(),
    tail_length: Joi.number().integer().min(0).required(),
    weight: Joi.number().integer().min(0).required()
});

const schemas = {
    dogAdd
}

module.exports = {
    dogModel,
    schemas
};