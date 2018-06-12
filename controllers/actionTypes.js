const { Router } = require('express');

const model = require('../database/models/actionType');

const router = new Router();

router.get('/', (req, res) => {
    model.getActionTypes()
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

router.post('/add', (req, res) => {
    const { name, description } = req.body;
    model.createActionType(name, description)
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

module.exports = router;
