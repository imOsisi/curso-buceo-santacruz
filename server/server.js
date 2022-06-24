const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1/buceo-santacruz-data')
    .then(() => console.log('DB Connected'));

const port = 5000;

const Cursos = require('./Models/Cursos.model');

const cors = require('cors');
app.use(cors());


app.get('/api/cursos', (req,res) => {
    
    Cursos
        .find()
    .then(allCursos => res.json(allCursos))


});

app.get('/api/details/:cursos_id', (req, res) =>{
    
    const { cursos_id } = req.params
    
    Cursos
        .findById(cursos_id)
        .then(cursos => res.send(cursos))
    
})

app.listen(port, () => {
    console.log(`Server Up on port ${port}`)
});

