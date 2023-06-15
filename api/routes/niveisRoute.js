const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router.get('/pessoas', NivelController.pegaTodosOsNiveis);
router.get('/pessoas/:id', NivelController.PegaUmNivel);
router.post('/pessoas', NivelController.criaNivel);
router.put('/pessoas/:id', NivelController.atualizaNivel);
router.delete('/pessoas/:id', NivelController.apagaNivel);

module.exports = router