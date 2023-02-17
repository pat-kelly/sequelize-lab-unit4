const router = require('express').Router();
const pengCtrl = require('../controllers/penguins.js');

router.post('/', pengCtrl.create);
router.get('/', pengCtrl.index);


module.exports = router;