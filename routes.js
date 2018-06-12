const { Router } = require('express');

const router = new Router();

router.use('/actionTypes', require('./controllers/actionTypes'));

module.exports = router;
