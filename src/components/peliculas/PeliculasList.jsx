
import PropTypes from 'prop-types';
import PeliculasItem from './peliculasItem';

function PeliculasList({ peliculas }) {
    return (
        <>
            <ul className='listado__ul'> {peliculas.map((onePeli) =>
                <li key={onePeli.timestamp} className='listado__li'>
                    <PeliculasItem onePeli={onePeli}></PeliculasItem>

                </li>)}
            </ul>

        </>

    )
}

PeliculasList.propTypes = {
    peliculas: PropTypes.array
}
export default PeliculasList;