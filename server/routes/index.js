var express = require('express')
const router = express.Router()


router.use('/crud', require('./crud'))

module.exports = router;                                                                                                                                   