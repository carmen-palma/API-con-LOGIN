const express = require('express');
const app = express();
const authenticationRoutes = require('./routes/authenticationRoutes');
const characterRoutes = require('./routes/characterRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Middleware
app.use(express.json());
app.use('/auth', authenticationRoutes);
app.use('/characters', characterRoutes);
app.use('/search', searchRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server está ejecutando ${PORT}`);
});