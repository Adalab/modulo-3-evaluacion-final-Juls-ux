function Filter({ handleFilterMovie, handleFilterYear }) {
    return (
      <ul className="header__ul">
        <li className="header__li">
          <label className="header__label" htmlFor="movie">Movie</label>
          <input className="header__input" type="text" onInput={handleFilterMovie} />
        </li>
  
        <li className="header__li">
          <label className="header__label" htmlFor="year">Year</label>
          <input className="header__input" type="text" onChange={handleFilterYear} />
        </li>
      </ul>
    );
  }
  
  export default Filter;
  
  