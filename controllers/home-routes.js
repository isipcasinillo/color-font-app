const router = require('express').Router();
const User = require('../models/User')
// const {} = require('./models');


// 'localhost:3001/' //
router.get('/', async (req, res) => {
    try {



        res.render('homepage');
    } catch (err) { // returns error
        res.status(500).json(err);       
    };
});


router.post('/create', async (req, res) => {
    try {
        const UserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        res.status(200).json(UserData);
        
    } catch (err) {
        res.status(500).json(err);  
    };
});

module.exports = router;
