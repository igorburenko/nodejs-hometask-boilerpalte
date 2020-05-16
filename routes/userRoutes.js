const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('/:id', function(req, res, next) {
  const result = UserService.getUserFromDb(req.params.id);
  res.send(result);
});

router.get('/', function(req, res, next) {
  const result = UserService.getAllUsersFromDb();
  res.send(result);
});

router.post('/', function(req, res, next) {
  try {
    createUserValid(req, res, next);
    res.data = UserService.createNewUser(req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', updateUserValid, function(req, res, next) {
  const result = UserService.updateUser(req.params.id, req.body);
  if (result) {
    res.send(`Data is Updated`);
  } else {
    res.status(400).send(`Some error`);
  }
});

router.delete('/:id', responseMiddleware, function(req, res, next) {
  console.log(req.params.id);
});

// TODO: Implement route controllers for user

module.exports = router;
