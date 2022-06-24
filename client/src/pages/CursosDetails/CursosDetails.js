import { useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

const CursosDetails = () => {
    
    const { cursos_id } = useParams();
    const [cursos, setCursos] = useState({});

    const loadCursosDetails = () => {
        fetch(`http://localhost:5000/api/details/${cursos_id}`)
            .then(response => response.json())
            .then(cursos => setCursos(cursos)) 
    }

    loadCursosDetails();
    
    return (
        <main>
            <h1>Detalles del curso {cursos.tipoDeCurso}</h1>
            <hr />
            <Link to='/cursos'>Volver a los cursos</Link>
        </main>
    )

}

export default CursosDetails;
