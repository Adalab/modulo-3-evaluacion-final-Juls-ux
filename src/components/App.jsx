import '../styles/App.scss';

import logoOwen from '../images/logo-owen.png'
import { useState, useEffect } from 'react';

import PeliculasList from './peliculas/peliculasList';
import Header from './Header';
import Filter from './Filter';

function App() {

  //VARIABLES DE ESTADO

  const [peliculas, setPeliculas] = useState( [] );
  const [filterMovie, setFilterMovie] =useState('');
  const [filteryear, setFilteryear]= useState('');

  //SECCION EVENTOS

  const handleFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value);
  };
  
  const handleFilterYear = (ev) => {
    ev.preventDefault();
    setFilteryear(ev.target.value);
  };
  

  const filteredMovies = peliculas.filter(pelicula =>
    pelicula.movie.toLowerCase().includes(filterMovie.toLowerCase()) &&
    (filteryear === '' || pelicula.year.toString() === filteryear)
  );
  

  //HOOK
  useEffect (() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=' +filteryear)
    .then( response => response.json())
    .then( dataJson => {
      setPeliculas(dataJson);
    });
  
  }, [filteryear])

  return (
    <div>
     <Header></Header>

      <main>
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


      </main>
    </div>
  )
}


export default App;
