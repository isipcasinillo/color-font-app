const router = require('express').Router();
// const {} = require('./models');


// 'localhost:3001/' //
router.get('/', async (req, res) => {
    try {



        res.render('homepage');
    } catch (err) { // returns error
        res.status(500).json(err);       
    };
});

module.exports = router;
