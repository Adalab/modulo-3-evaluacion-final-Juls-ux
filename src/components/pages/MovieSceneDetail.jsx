import { useParams, Link } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router';


function MovieSceneDetail({ peliculas }) {
    const params = useParams();
    const pelicula = peliculas.find(pelicula => pelicula.movie === params.name);

    if (!pelicula) {
        return <p>No se encontró la película 😥</p>;
    }

    return (
        <section>
            <h2>Información de {pelicula.movie}</h2>
            <img className="listado__img" src={pelicula.poster} alt={pelicula.movie} />
            <h3 className='listado__h3'>{pelicula.movie}</h3>
            <h4 className='listado__h4'>{pelicula.full_line}</h4>
            <p className='listado__paragraphYear'>{pelicula.year}</p>
            <p className='listado__paragraph'>{pelicula.timestamp}</p>

            <Link to="/">Volver</Link>
        </section>
    );
}

export default MovieSceneDetail;
