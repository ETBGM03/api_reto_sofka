const { Router } = require('express');
const router = Router();
const GuardarRondaGanada = require('./../services/guardarRondaGanada');
const service = new GuardarRondaGanada();

router.post('/', async (req, res) => {
  try {
    let { nombre, apellido, identificacion, puntos2, idusuario } = req.body;
    const pregunta = await service.guardarRondaGanada(
      nombre,
      apellido,
      identificacion,
      puntos2,
      idusuario
    );
    res.status(200).json(pregunta);
  } catch (error) {
    console.log(error);
  }
});
// let { id_pregunta } = pregunta;
// const respuestas_pregunta = service.obtenerRespuestasPregunta(id_pregunta);
// // res.json(result);

module.exports = router;
