const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is valid (e.g., numeric, exists in database)
  if (!isValidUserId(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...rest of the code to fetch user data...
});

function isValidUserId(userId) {
  // Add your validation logic here (e.g., check if it's a number, exists in a database)
  return /^[0-9]+$/.test(userId) && userId > 0; // Example: must be a positive integer
}
