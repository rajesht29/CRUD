const express = require('express')
const router = express.Router();

const { Crud } = require('./../models')

function sendError(res, err) {
    var result = {
        "success": false,
        "error": err,
    };
    return res.json(result);
}
function sendSuccess(res, result) {
    var finalResult = {
        "success": true,
        "data": result
    };
    return res.json(finalResult);
}

router.post('/', (req, res) => {
    Crud.create(req.body).then(function (result) {
        sendSuccess(res, result)
    }).catch(function (err) {
        sendError(res, err);

    });
})

router.get('/', (req, res) => {
    Crud.findAll().then(function (result) {
        sendSuccess(res, result)
    }).catch(function (err) {
        sendError(res, err);

    });
})

router.get('/:id', (req, res) => {
    Crud.findOne({ where: { id: req.params.id } }).then(function (result) {
        sendSuccess(res, result)
    }).catch(function (err) {
        sendError(res, err);

    });
})

router.put('/:id', (req, res) => {
    let value = {
        name: req.body.value1,
        email: req.body.value2,
        password: req.body.value3
    }
    Crud.update(value, { where: { id: req.params.id } }).then(function (result) {
        success(res, "success")
    }).catch(function (err) {
        sendError(res, err);
    });
})

router.delete('/:id', (req, res) => {
    Crud.destroy({ where: { id: req.params.id } }).then(function (result) {
        sendSuccess(res, "success")
    }).catch(function (err) {
        sendError(res, err);
    });
})


module.exports = router;