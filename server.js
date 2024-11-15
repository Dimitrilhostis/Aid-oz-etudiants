const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialisation de l'app
const app = express();
app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Base de données connectée'))
  .catch(err => console.log(err));

// Routes
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});


// Initialisation de firebase
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const message = {
  notification: {
    title: 'Événement à venir',
    body: 'N\'oubliez pas votre événement à 18h.'
  },
  token: userToken // Le token de l'utilisateur à qui envoyer la notification
};

admin.messaging().send(message).then(response => {
  console.log('Notification envoyée avec succès', response);
}).catch(error => {
  console.log('Erreur d\'envoi de notification', error);
});


// Connection à mongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.log('Erreur MongoDB:', err));
