const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const q = req.query.q || '';
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`
    );
    res.json(response.data);
  } catch (err) {
    //console.error('Error fetching from Open Library:',err.message);
    res.status(500).json({ error: 'Failed to fetch from Open Library API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});