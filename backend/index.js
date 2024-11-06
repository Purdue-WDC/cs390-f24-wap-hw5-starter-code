// Because this app is not ran in the browser, we need to use CommonJS (Node.js) syntax.
// For imports, this means using require instead of import.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Psuedo-database.

const user_data = {}; // global object for storing user data.
const game_logs = []; // global array for logging completed games.

// Create, initialize, and run express app.

const app = express();

app.use(cors()); // handles cors issues
app.use(bodyParser.json()); // parses request body so we can access it via req.body

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});