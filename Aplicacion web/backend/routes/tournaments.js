const express = require('express');
const router = express.Router();
const Tournament = require('../backend/models/tournament');

// Obtener todos los torneos
router.get('/', (req, res) => {
  Tournament.find({}, (err, tournaments) => {
    if (err) {
      console.error('Error al obtener los torneos:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(tournaments);
    }
  });
});

// Crear un nuevo torneo
router.post('/', (req, res) => {
  const newTournament = new Tournament({
    name: req.body.name,
    date: req.body.date,
    location: req.body.location,
    participants: req.body.participants
  });
  
  newTournament.save((err) => {
    if (err) {
      console.error('Error al crear el torneo:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json({ message: 'Torneo creado exitosamente' });
    }
  });
});

module.exports = router;
