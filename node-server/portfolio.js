const express = require('express');
const router = express.Router();

const portfolioCardData = require("../mock/portfolio");

router.get('/', (req, res) => {
    res.json(portfolioCardData);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = portfolioCardData.find(data => data.id === Number(id));

    if (result) {
        res.json(result);
    } else {
        res.status(404).send('Not Found');
    }
});

module.exports = router;

