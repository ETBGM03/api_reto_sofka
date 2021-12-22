const express = require('express');
const routerCrearUsuario = require('./crearUsuario');
const routerGetRespuestas = require('./respuestas');
const getUsuario = require('./usuario');
const rondas = require('./iniciarJuego');
const GuardarRondaGanada = require('./guardarRondaGanada');
const getPuntos = require('./obtenerPuntos');
const getPosiciones = require('./posiciones');
/**Creamos una funcion que permite definir las rutas que tendrá la app,
 * por medio de una instancia de express Router.
 */
const routerApi = (app) => {
  const router = express.Router(); //middlerware que me permite crear y gestionar rutas de la app
  app.use('/v1/api', router);
  router.use('/crearUsuario', routerCrearUsuario);
  router.use('/usuario', getUsuario);
  router.use('/ronda', rondas);
  router.use('/respuestas', routerGetRespuestas);
  router.use('/guardar-ronda', GuardarRondaGanada);
  router.use('/obtener-puntos', getPuntos);
  router.use('/posiciones', getPosiciones);
};
module.exports = { routerApi };
