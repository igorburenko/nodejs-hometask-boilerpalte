const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', function(req, res, next) {
  const result = FighterService.getAllFightersFromDb();
  res.send(result);
});

router.get('/:id', function(req, res, next) {
  const result = FighterService.getFighterFromDb(req.params.id);
  res.send(result);
});

router.post('/', function(req, res, next) {
  try {
    createFighterValid(req, res, next);
    res.data = FighterService.createNewFighter(req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

module.exports = router;
//

// GET /api/fighters/:id
// POST /api/fighters
// PUT /api/fighters/:id
// DELETE /api/fighters/:id
