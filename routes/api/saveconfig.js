const router = require('express').Router();
const { User, saveConfig } = require('../../Models')
// const saveConfig= require('../../Models/saveconfig');
const sequelize = require('../../config/connection');

router.post('/', async (req, res) => {
    try {
        const postConfig = await saveConfig.create(
            {
                processor: req.body.processor,
                ram: req.body.ram,
                storage: req.body.storage,
                motherboard: req.body.motherboard,
                keyboard: req.body.keyboard,
                gpu: req.body.gpu,
                cases: req.body.cases,
                casefan: req.body.casefan,
                cpu: req.body.cpu,
                // monitor: req.body.monitor,
                user_id: req.body.user_id
            }
        );

        res.status(200).json(postConfig);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/', async (req, res) => {
    try {
        const getConfig = await saveConfig.findAll({ include: [{ model: User }] });

        res.status(200).json(getConfig);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/:user_id', async (req, res) => {
    try {
        const getConfig = await saveConfig.findAll(
            //     {
            //     include: [{ model: User }]
            // },
            {
                where: {
                    user_id: req.params.user_id
                }
            });

        res.status(200).json(getConfig);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const delConfig = await saveConfig.destroy({
            where: {

                id: req.params.id

            }
        })

        res.status(200).json(delConfig);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
