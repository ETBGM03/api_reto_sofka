const { Router } = require('express');
const router = Router();
const Respuestas = require('./../services/respuestas');
const service = new Respuestas();

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    const respuestas = await service.RespuestasDeRonda(id);
    res.status(200).json(respuestas);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
