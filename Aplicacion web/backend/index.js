const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tournamentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Conexión exitosa a la base de datos');
});

mongoose.connection.on('error', (err) => {
  console.error('Error al conectar a la base de datos:', err);
});


const tournamentRoutes = require('./routes/tournaments');

app.use('/tournaments', tournamentRoutes);
