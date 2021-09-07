const router = require('express').Router();
const User = require('../models/User')
const Pallete = require('../models/Pallete')
// const {} = require('./models');


// 'localhost:3001/' //
router.get('/', async (req, res) => {
    try {



        res.render('homepage');
    } catch (err) { // returns error
        res.status(500).json(err);       
    };
});


router.get('/view', async (req, res) => {
    const dishData = await Pallete.findAll().catch((err) => { 
        res.json(err);
      });
        const dishes = dishData.map((dish) => dish.get({ plain: true }));
        res.render('viewer', { dishes });
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

router.post('/choose', async (req, res) => {
    try {
        const UserChoose = await Pallete.create({
            color1: req.body.color1,
            color2: req.body.color2,
            color3: req.body.color3,
            font1: req.body.font1,
            font2: req.body.font2,
            font3: req.body.font3
        });
        
        res.status(200).json(UserChoose);
        
    } catch (err) {
        res.status(500).json(err);  
    };
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const UserChoose = await Pallete.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(UserChoose);
        
    } catch (err) {
        res.status(500).json(err);  
    };
});
module.exports = router;
