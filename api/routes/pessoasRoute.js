const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.PegaUmaPessoa);

module.exports = router