import '../styles/App.scss';
import logoOwen from '../images/logo-owen.png'





function App() {
  return (
    <div className='header'>
      <img className="img" src={logoOwen} alt="logo owen" />
      <h1 className='header__h1'>Owen Wilson</h1>
      <p className='header__wow'> WOW</p>

      <p className='header__paragraph'>Busca la pelicula de Owen Wilson donde m'as veces dice "Wow". Puedes filtrar tanto por película como por año 😉</p>

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


    </div>
  )
}

export default App;
