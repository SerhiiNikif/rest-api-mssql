module.exports = (sequelize, Sequelize) => {

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