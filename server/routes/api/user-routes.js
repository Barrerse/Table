const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  savegame,
  deletegame,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, savegame);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/games/:gameId').delete(authMiddleware, deletegame);

module.exports = router;