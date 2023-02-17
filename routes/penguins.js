const router = require('express').Router();
const pengCtrl = require('../controllers/penguins.js');

router.post('/', pengCtrl.create);
router.get('/', pengCtrl.index);
router.put('/:id', pengCtrl.update);
router.delete('/:id', pengCtrl.delete);

router.post('/:id/habitats', pengCtrl.addHabitat);

module.exports = router;