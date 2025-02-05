
import PropTypes from 'prop-types';

function PeliculasItem(onePeli){
    return(
        <>

      <img className="listado__img" src={onePeli.poster} alt="" />
       <h3 className='listado__h3'>{onePeli.movie}</h3>
       <h4 className='listado__h4'>{onePeli.full_line}</h4>
       <p className='listado__paragraphYear'>{onePeli.year}</p>
       <p className='listado__paragraph'>{onePeli.timestamp}</p>
        </>

    )

}

PeliculasItem.propTypes = {
    onePeli: PropTypes.object
}
export default PeliculasItem;