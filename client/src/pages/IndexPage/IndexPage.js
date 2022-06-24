import {Link} from 'react-router-dom';

const IndexPage = () => {
    return (
        <main>
            <h1>Benvenutti</h1>
            <hr />
            <Link to='/cursos'>Ver cursos</Link>
        </main>
    )

}

export default IndexPage;
