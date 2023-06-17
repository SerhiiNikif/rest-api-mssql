const express = require('express');
const {
    findAll
} = require('../controllers/dog-controller');
const router = express.Router();
const ctrlWrapper = require('../helpers/ctrlWrapper');

router.get('/dogs', ctrlWrapper(findAll));

module.exports = router;