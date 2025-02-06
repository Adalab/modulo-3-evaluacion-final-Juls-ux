import { Link } from 'react-router'
import PeliculasList from './peliculas/peliculasList';
import Filter from './Filter';

function Home({ handleFilterMovie, handleFilterYear, years }) {
    return (
        <>
            <section className='header__filter'>
                <Filter handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={years} />


            </section>
            <div className='listado'>
                {peliculas.length === 0 ? (
                    <p>No hay resultados 😥 </p>
                ) : (
                    <PeliculasList peliculas={filteredMovies}></PeliculasList>)

                }
            </div>

        </>
    )
}
export default Home;