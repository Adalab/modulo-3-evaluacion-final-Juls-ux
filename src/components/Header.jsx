import logoOwen from '../images/logo-owen.png'

function Header ()

{
    return(
        <header className='header'>
        <img className="img" src={logoOwen} alt="logo owen" />
        <h1 className='header__h1'>Owen Wilson</h1>
        <p className='header__wow'> WOW</p>

        <p className='header__paragraph'>Busca la pelicula de Owen Wilson donde más veces dice "Wow". Puedes filtrar tanto por película como por año 😉</p>

      </header>

    )
}

export default Header;