const router = require('express').Router();
// const { User, Thought, Reaction } = require('../../models');
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

router.route('/')
  .get(getAllUser)
  .post(createUser);


module.exports = router;