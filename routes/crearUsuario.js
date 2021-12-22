const { Router } = require('express');
const router = Router();
const CrearUsuario = require('./../services/crearUsuario');
const service = new CrearUsuario();

router.post('/', async (req, res) => {
  let { nombre, apellido, identificacion } = req.body;
  let result = await service.setUsuario(nombre, apellido, identificacion);
  res.json({ status: 201, message: 'Usuario creado', result });
});

module.exports = router;
