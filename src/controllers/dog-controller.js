const db = require("../models");
const Dog = db.dogs;

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

module.exports = {
    findAll
};
