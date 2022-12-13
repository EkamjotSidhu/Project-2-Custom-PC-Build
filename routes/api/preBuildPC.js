const router = require('express').Router();
const preBuild = require('../../Models/Prebuild');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
    try {
        const prebuilds = await preBuild.findAll();

        res.status(200).json(prebuilds);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;