const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes when created
app.use(require('./routes'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));