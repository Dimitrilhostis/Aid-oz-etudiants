const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/tracking', (req, res) => {
  // Traiter et sauvegarder les données de tracking
  res.send('Données de tracking sauvegardées');
});

app.post('/api/emploi', (req, res) => {
  // Sauvegarder l'événement de l'emploi du temps
  res.send('Événement sauvegardé');
});

app.post('/api/coaching', (req, res) => {
  // Sauvegarder les données d'inscription au coaching
  res.send('Inscription au coaching reçue');
});

app.listen(3000, () => {
  console.log('Serveur en marche sur le port 3000');
});