const express = require('express')
const router = express.Router()
const dockerController = require('../controllers/docker')

router.route('/docker').post(dockerController.deployDocker)
// router.route('/docker').delete(dockerController.destroyDocker)
// router.route('/')
module.exports = router