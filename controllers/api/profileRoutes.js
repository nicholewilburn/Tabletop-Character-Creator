const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const newCharacter = await Character.findAll();

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;