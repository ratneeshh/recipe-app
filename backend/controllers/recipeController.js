const axios = require('axios');

const EDAMAM_APP_ID = 'cc163dc8';
const EDAMAM_APP_KEY = 'b6cfbee79fec90f1c327e0e599f0ad26';

exports.getRecipes = async (req, res) => {
    try {
        const { ingredients } = req.body;


        const response = await axios.get('https://api.edamam.com/search', {
            params: {
                q: ingredients,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY
            }
        });

        const recipes = response.data.hits.map(hit => hit.recipe);
        res.json({ success: true, data: recipes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to fetch recipes' });
    }
};
