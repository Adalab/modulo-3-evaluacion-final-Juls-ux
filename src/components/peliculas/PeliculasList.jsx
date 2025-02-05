
import PropTypes from 'prop-types';
import PeliculasItem from './peliculasItem';

function PeliculasList({peliculas}) {
    return (
        <>
        <div className='listado'>
            <ul className='listado__ul'>
                    {peliculas.map((onePeli) => <li key={onePeli.timestamp} className='listado__li'>
                        <PeliculasItem onePeli={onePeli}></PeliculasItem>


                    </li>)}
                </ul>
            </div>
        </>

    )
}

PeliculasList.propTypes = {
    peliculas: PropTypes.array
}
export default PeliculasList;