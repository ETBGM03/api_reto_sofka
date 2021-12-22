const express = require('express'); //usamos express que un framework de node para crear nuestra api
const cors = require('cors'); //usamos cors para el intercambio de datos entre el front y el back
//inicializar app
const app = express();
app.use(cors()); //permite que el front pueda acceder a los datos por medio de la api
const port = process.env.PORT || 3001; //Aquí definimos el puerto que va a escuchar el servidor
const { routerApi } = require('./../routes/index'); //importamos el router

//middleware
app.use(express.json()); //middleware para recibir datos en formato json
routerApi(app);

app.listen(port, () => {
  console.log(`sever iniciado en el puerto ${port}`);
});
