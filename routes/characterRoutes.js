const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authenticationMiddleware');
const { getCharacterByName } = require('../controllers/characterController');

router.get('/:name', authenticateToken, getCharacterByName);

module.exports = router;