const { Router } = require('express');
const router = Router();
const ObtenerPuntos = require('./../services/obtenerPuntos');
const service = new ObtenerPuntos();

router.get('/:id', async (req, res) => {
  let { id } = req.params;
  let result = await service.getPuntosUsuario(id);
  res.json({ status: 200, message: 'Puntaje del usuario', result });
});

module.exports = router;
