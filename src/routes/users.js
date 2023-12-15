const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        message: "Get Users success"
    })
});


router.post('/',(req, res, next) => {
    res.json({
        message: "Post users success"
    })
});

module.exports = router;