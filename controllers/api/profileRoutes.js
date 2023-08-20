const router = require('express').Router();
const { Character, User } = require('../../models');
const withAuth = require('../../utils/auth');

// for handling auth views

// get all characters (add withAuth later?)
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const characters = characterData.map((character) => character.get({ plain: true }));

    res.render('profile', { 
      ...characters, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
