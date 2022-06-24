const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
    tipoDeCurso: String,
    inicio: Date,
    cantidadClases: Number,
    metodologia: String,
    duracion: Number
});

const Cursos = mongoose.model('cursos', cursoSchema);

module.exports = Cursos;