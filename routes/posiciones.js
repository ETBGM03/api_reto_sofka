const { Router } = require('express');
const router = Router();
const Posiciones = require('./../services/posiciones');
const service = new Posiciones();

router.get('/', async (req, res) => {
  let result = await service.getPosicionesJugadores();
  res.json(result);
});

module.exports = router;
