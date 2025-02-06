import {useParams, Link} from 'react-router';

function MovieSceneDetail({findPeli}){

    const params= useParams()
    const pelicula=findPeli(params.name);

    return(
        <>
        <section>
            <h2>Información de {params.name}</h2>

            <img className="listado__img" src={pelicula.poster} alt="" />
                <h3 className='listado__h3'>{pelicula.movie}</h3>
                <h4 className='listado__h4'>{pelicula.full_line}</h4>
                <p className='listado__paragraphYear'>{onePeli.year}</p>
                <p className='listado__paragraph'>{pelicula.timestamp}</p>

            <Link to="/">Volver</Link>
        </section>
        </>
    )
}

export default MovieSceneDetail