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
  
  /*const handleFilterYear = (ev) => {
    ev.preventDefault();
    setFilteryear(ev.target.value);
  };*/
  

  const filteredMovies = peliculas.filter(pelicula =>
    pelicula.movie.toLowerCase().includes(filterMovie.toLowerCase())
  );
  
  //const filteredYears = peliculas.filter((pelicula) =>pelicula.year.toString().includes(filteryear));
  

  //HOOK
  useEffect (() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then( response => response.json())
    .then( dataJson => {
      setPeliculas(dataJson);
    });
  
  }, [])

  return (
    <div>
     <Header></Header>

      <main>
        <section className='header__filter'>
        <Filter handleFilterMovie={handleFilterMovie} />


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
