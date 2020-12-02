const express = require('express');
const { getSetups, addSetup } = require('../controllers/setupController');
const router = express.Router();

router.get('/setups', getSetups);
router.post('/setups', addSetup);

module.exports = router;