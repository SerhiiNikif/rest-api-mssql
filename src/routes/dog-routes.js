const express = require('express');
const {
    findAll,
    create
} = require('../controllers/dog-controller');
const router = express.Router();
const ctrlWrapper = require('../helpers/ctrlWrapper');
const validation = require('../middlewares/validation');
const {schemas} = require("../models/dog.model.js");

router.get('/dogs', ctrlWrapper(findAll));
router.post('/dog', validation(schemas.dogAdd), ctrlWrapper(create));

module.exports = router;