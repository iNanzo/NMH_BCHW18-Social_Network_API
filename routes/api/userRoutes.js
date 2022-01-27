const router = require('express').Router();
const 
{
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

/* 
GET all Users
POST new User
*/
router.route('/').get(getUsers).post(createUser);

/*
GET singular User by id
PUT update existing User
DELETE existing User
*/
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

/*
POST friend to User
DELETE friend from User
*/
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;