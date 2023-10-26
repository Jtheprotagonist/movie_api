const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000; // Define the port

app.use(morgan('combined'));

app.use(express.static('public'));

const topMovies = [
  { title: 'Movie 1', rating: 8.5},
  { title: 'Movie 2', rating: 9.0},
  { title: 'Movie 3', rating: 7.0},
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to Movie Murmur!');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
