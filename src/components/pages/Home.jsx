

import { Link } from 'react-router'
import PeliculasList from "../peliculas/PeliculasList";

import Filter from '../Filter';

function Home({ peliculas, handleFilterMovie, handleFilterYear, years }) {
    return (
        <>
            <section className='header__filter'>
                <Filter handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={years} />


            </section>
            <div className='listado'>
                {peliculas.length === 0 ? (
                    <p>No hay resultados 😥 </p>
                ) : (
                    <PeliculasList peliculas={peliculas}></PeliculasList>)

                }
            </div>

        </>
    )
}
export default Home;