const db = require("../models");
const Dog = db.dogs;
const createError = require("../helpers/createError");

const findAll = async (req, res) => {
    let {attribute, order, pageNumber, limit} = req.query;
    const paramQuerySQL = {};

    if (typeof order === 'undefined' || order == '') {
        order = 'ASC';
    }

    if (typeof order !== 'undefined' && !['asc','desc'].includes(order.toLowerCase())) {
        order = 'ASC';
    }

    if (attribute != '' && typeof attribute !== 'undefined') {
        paramQuerySQL.order = [
            [attribute, order]
        ];
    }

    if (pageNumber != '' && typeof pageNumber !== 'undefined' && pageNumber > 0) {
        paramQuerySQL.offset = parseInt(pageNumber);
    }

    if (limit != '' && typeof limit !== 'undefined' && limit > 0) {
        paramQuerySQL.limit = parseInt(limit);
    }

    Dog.findAll(paramQuerySQL)
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

const create = async (req, res) => {
    const candidate = await Dog.findOne({where: {name: req.body.name}})

    if (candidate) {
        throw createError(400, `Dog ${req.body.name} already exists`);
    }

    Dog.create({...req.body})
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the dog."
            });
        });
}

module.exports = {
    findAll,
    create
};
