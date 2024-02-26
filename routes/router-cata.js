const express = require('express')

const { getCatagory } = require('../controller/controller-cata')

const router = express.Router();

router.get('/', getCatagory );


module.exports = router;