
import owenSoprendido from '../../images/owen-sorprendido.jpg'
import { Link } from 'react-router';
import PeliculasList from "../peliculas/PeliculasList";

import Filter from '../Filter';

function Home({ peliculas, handleFilterMovie, handleFilterYear, years, handleFilterRemove }) {
    
    return (
        <>
            <section className='header__filter'>
                <Filter handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={years} handleFilterRemove={handleFilterRemove} />


            </section>
            <div className='listado'>
                {peliculas.length === 0 ? (
                    <p className='listado__no-result'>No hay resultados 😥 
                    <img className="listado__img-noResult" src={owenSoprendido} alt="" /></p>
                ) : (
                    <PeliculasList peliculas={peliculas}></PeliculasList>)

                }
            </div>

        </>
    )
}
export default Home;