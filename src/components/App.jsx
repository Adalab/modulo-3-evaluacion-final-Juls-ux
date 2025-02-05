import '../styles/App.scss';
import dataJson from '../data/peliculas.json';
import logoOwen from '../images/logo-owen.png'
import { useState } from 'react';


function App() {

  //VARIABLES DE ESTADO

  const[peliculas, serPeliculas] = useState(dataJson);
  console.log(peliculas);

  return (
    <div>
      <header className='header'>
        <img className="img" src={logoOwen} alt="logo owen" />
        <h1 className='header__h1'>Owen Wilson</h1>
        <p className='header__wow'> WOW</p>

        <p className='header__paragraph'>Busca la pelicula de Owen Wilson donde m'as veces dice "Wow". Puedes filtrar tanto por película como por año 😉</p>

      </header>

      <main>
        <section className='header__filter'>

          <ul className='header__ul'>
            <li className='header__li'>
              <label className="header__label" htmlFor="">Movie</label>
              <input className="header__input" type="text" />
            </li>

            <li className='header__li'> <label className="header__label" htmlFor="">Year</label>
              <input className="header__input" type="text" />
            </li>
          </ul>

        </section>

        <div className='listado'>
          <ul className='listado__ul'>
           {peliculas.map( (onePeli) =>  <li>
              <img src={onePeli.poster} alt="" />
              <h3>{onePeli.movie}</h3>
              <p>{onePeli.full_line}</p>
              <p>{onePeli.timestamp}</p>
              <p>{onePeli.year}</p>
            </li>) } 
           
          </ul>


        </div>
      </main>




    </div>
  )
}

export default App;
