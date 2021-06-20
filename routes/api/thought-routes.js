const router = require('express').Router();
const { User, Thought, Reaction } = require('../../models');

router.get('/', (req, res) => {
  Thought.find({})
    .then(dbThought => {
      res.json(dbThought);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', ({ body }, res) => {
  Thought.create(body)
    .then(dbThoughtData => {
      res.json(dbThoughtData);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;