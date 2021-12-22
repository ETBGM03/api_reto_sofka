const { Router } = require('express');
const router = Router();
const IniciarJuego = require('./../services/iniciarJuego');
const service = new IniciarJuego();

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    if (id > 5) {
      res.json({ status: 403, message: 'Solo son 5 rondas del juego' });
    } else {
      const pregunta = await service.primeraRonda(id);
      res.status(200).json(pregunta);
    }
  } catch (error) {
    console.log(error);
  }
});
// let { id_pregunta } = pregunta;
// const respuestas_pregunta = service.obtenerRespuestasPregunta(id_pregunta);
// // res.json(result);

module.exports = router;
