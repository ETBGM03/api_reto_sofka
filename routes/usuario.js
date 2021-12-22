const { Router } = require('express');
const router = Router();
const Usuario = require('./../services/usuario');
const service = new Usuario();

router.get('/', async (req, res) => {
  let result = await service.getUsuario();
  res.json(result);
});

module.exports = router;
