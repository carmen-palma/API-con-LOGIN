const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authenticationMiddleware');
const { searchCharacter } = require('../controllers/searchController');

router.get('/', authenticateToken, searchCharacter);

module.exports = router;