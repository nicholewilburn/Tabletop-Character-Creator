const router = require('express').Router();
// THIS WILL PROBABLY WANT A PORTRAIT MODEL TO AFFECT SPECIFICALLY??
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// THIS HAS THE CHARACTER CRUD OPERATIONS, SHOULD MAKE A GOOD TEMPLATE FOR THE PORTRAITS




// read character (add withAuth later?)
router.get('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.id);

      if (!characterData) {
          res.status(404).json({ message: 'No character found with that id!' });
          return;
      }

      res.status(200).json(characterData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// create character (add withAuth later?)
router.post('/', async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update character (add withAuth later?)
router.put('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.id);
      characterData.set({
        ...req.body,
        // user_id: req.session.user_id,
      });
      await characterData.save();
      res.status(200).json(characterData);
  } catch (err) {
      res.status(400).json(err);
  }
})

// delete character (add withAuth later?)
router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;