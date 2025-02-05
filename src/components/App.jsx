import '../styles/App.scss';

import logoOwen from '../images/logo-owen.png'
import { useState, useEffect } from 'react';

import PeliculasList from './peliculas/peliculasList';
import Header from './Header';
import Filter from './Filter';

function App() {

  //VARIABLES DE ESTADO

  const [peliculas, setPeliculas] = useState( [] );

  //HOOK
  useEffect (() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then( response => response.json())
    .then( dataJson => {
      setPeliculas(dataJson);
    });
  
  }, [])
  console.log(peliculas)


  return (
    <div>
     <Header></Header>

      <main>
        <section className='header__filter'>
          <Filter></Filter>


        </section>
        <div className='listado'>
          {peliculas.length === 0 ? (
            <p>No hay resultados 😥 </p>
          ) : (
            <PeliculasList peliculas={peliculas}></PeliculasList>)

          }
        </div>


      </main>
    </div>
  )
}

export default App;
