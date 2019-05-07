const express = require('express');
const ApiOperation = require('./ApiOperation');
const joi = require('joi');
const uuid = require('uuidv4');

const vidlydb = require('./moviedb');


let app = express();
app.use(express.json());
app.listen(3000);

app.get('/api/movies', vidlydb.getMovies);
app.post('/api/movies', vidlydb.createMovie);
app.get('/api/movies/:name', vidlydb.getMovieByName);
app.put('/api/movies/:_id', vidlydb.update);
