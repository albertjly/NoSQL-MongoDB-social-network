const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);

router
  .route('/:userId')
  .post(addThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .delete(removeThought)
  .put(updateThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction);

router
  .route("/:thoughtId/:reactionId")
  .delete(removeReaction);


module.exports = router;