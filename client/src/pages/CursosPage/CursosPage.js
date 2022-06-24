import { useState } from 'react';
import { Link } from 'react-router-dom';

const CursosPage = () => {

    const [cursos, setCursos] = useState([]);

    const loadCursos = () => {

        fetch('http://localhost:5000/api/cursos')
        .then (res => res.json())
        .then (allCursos => setCursos(allCursos))
    }

    loadCursos();

    return (
        <main>
            <h1>Lista cursos</h1>
            <hr />
            {cursos.map(eachCursos => {
                return (
                    <Link to={`/cursosdetails/${eachCursos._id}`}>
                        <article className='cursos-card'>
                            <h3>{eachCursos.tipoDeCurso}</h3>
                        </article>
                    </Link>
                )
            })}
            <Link to='/'>Volver al inicio</Link>
        </main>
    )

}

export default CursosPage;
