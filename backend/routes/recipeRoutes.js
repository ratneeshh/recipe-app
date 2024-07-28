const express = require('express');
const router = express.Router();
const { getRecipes } = require('../controllers/recipeController');

router.post('/search', getRecipes);

module.exports = router;
