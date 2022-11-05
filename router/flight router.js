
const router = require ("express").Router(); 

const controller = require('../controllers/flightController');

router.get('/', controller.getFlight);

module.exports = router; 