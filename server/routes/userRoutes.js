const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/users')
  .get(userController.getAllUsers);

router
  .route('/user')
  .patch(userController.updateUserRole);

router
  .route('/profile')
  .get(userController.getUserProfile)
  .patch(userController.updateUserProfile);

router
  .route('/login')
  .post(userController.loginUser);

module.exports = router;