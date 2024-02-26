const express = require('express')

const { getOrder } = require('../controller/controller-order')

const router = express.Router();

router.get('/', getOrder );


module.exports = router;