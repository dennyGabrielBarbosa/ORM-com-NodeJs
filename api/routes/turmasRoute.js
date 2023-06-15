const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router.get('/pessoas', TurmaController.pegaTodasAsTurmas);
router.get('/pessoas/:id', TurmaController.PegaUmaTurma);
router.post('/pessoas', TurmaController.criaTurma);
router.put('/pessoas/:id', TurmaController.atualizaTurma);
router.delete('/pessoas/:id', TurmaController.apagaTurma);

module.exports = router